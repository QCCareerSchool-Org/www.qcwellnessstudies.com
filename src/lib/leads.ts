import type { School } from '../domain/school';

export interface LeadPayload {
  school: School;
  emailAddress: string;
  firstName?: string;
  lastName?: string;
  telephoneNumber?: string;
  emailOptIn?: boolean;
  smsOptIn?: boolean;
  gclid?: string;
  msclkid?: string;
  marketing?: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  };
  courses?: string[];
}

export const addLead = async (payload: LeadPayload): Promise<void> => {
  const url = 'https://leads.qccareerschool.com/';

  if (payload.marketing && !(payload.marketing.source || payload.marketing.medium || payload.marketing.campaign || payload.marketing.content || payload.marketing.term)) {
    // no marketing parameters were supplied
    payload.marketing = undefined;
  }

  if (payload.courses?.length === 0) {
    // no courses were supplied
    payload.courses = undefined;
  }

  const response = await fetch(url, {
    method: 'POST',

    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }
  await response.text();
};
