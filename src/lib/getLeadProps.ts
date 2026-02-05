import type { GetServerSidePropsContext } from 'next';

import { fbPostLead } from './facebookConversionAPI';
import { getHeader } from './getHeader';
import { getLead } from './getLead';
import { getParam } from './getParam';
import { createJwt } from './jwt';
import type { Lead } from '@/domain/lead';
import type { UserValues } from '@/domain/userValues';
import { getUserValues } from '@/pages/getUserValues';

interface LeadProps {
  emailAddress?: string;
  lead?: Lead;
  jwt: string | null;
  recent: boolean;
}

export const getLeadProps = async (context: GetServerSidePropsContext): Promise<LeadProps> => {
  const date = Date.now();
  const leadId = getParam(context, 'leadId');
  const clientIp = getHeader(context, 'x-vercel-ip');
  const userAgent = getHeader(context, 'user-agent');
  const url = getHeader(context, 'next-url');
  const fbc = context.req.cookies._fbc;
  const fbp = context.req.cookies._fbp;
  const oldUserValues = await getUserValues(context);

  const lead = leadId ? await getLead(leadId) : undefined;

  let recent = false;

  let jwt: string | null = null;
  if (lead?.success) {
    recent = lead.value.created > date - 604_800_000; // 7 days
    if (recent) {
      try {
        await fbPostLead(lead.value.leadId, new Date(lead.value.created), lead.value.emailAddress, lead.value.firstName, lead.value.lastName, lead.value.countryCode, url, lead.value.ip ?? clientIp, userAgent, fbc, fbp);
      } catch (err) {
        console.error(err);
      }
    }
    const userValues: UserValues = {
      ...oldUserValues,
      emailAddress: lead.value.emailAddress,
    };
    if (lead.value.telephoneNumber) {
      userValues.telephoneNumber = lead.value.telephoneNumber;
    }
    if (lead.value.firstName) {
      userValues.firstName = lead.value.firstName;
    }
    if (lead.value.lastName) {
      userValues.lastName = lead.value.lastName;
    }
    if (lead.value.city) {
      userValues.city = lead.value.city;
    }
    if (lead.value.provinceCode) {
      userValues.provinceCode = lead.value.provinceCode;
    }
    if (lead.value.countryCode) {
      userValues.countryCode = lead.value.countryCode;
    }
    jwt = await createJwt(userValues);
  }

  const emailAddress = lead?.success ? lead.value.emailAddress : undefined;

  return { emailAddress, lead: lead?.success ? lead.value : undefined, jwt, recent };
};
