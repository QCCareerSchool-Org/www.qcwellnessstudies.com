import React, { FC, FormEventHandler, useRef } from 'react';

import { useLocation } from '../hooks/useLocation';
import { addLead } from '../lib/leads';

export type HiddenField = {
  key: string;
  value: string | number;
};

type Props = {
  action: string;
  phoneNumber?: boolean;
  buttonText?: string;
  buttonClassName?: string;
  hiddenFields?: HiddenField[];
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  } | null;
  courses?: string[];
  initialValues?: {
    firstName: string | null;
    lastName: string | null;
    emailAddress: string | null;
    emailOptIn: boolean | null;
    telephoneNumber: string | null;
    smsOptIn: boolean | null;
  };
  errors?: boolean;
};

const getHiddenField = (name: string, hiddenFields?: Array<{ key: string; value: string | number }>): string | number | null => {
  return hiddenFields?.find(({ key }) => key === name)?.value ?? null;
};

// Do we need to keep track of the opt in date, or will Pardot do that? For telephoneOptIn too?

export const BrochureForm: FC<Props> = ({ action, phoneNumber = false, buttonText = 'Get the Catalog', buttonClassName, hiddenFields, marketing, courses, initialValues, errors }) => {
  const location = useLocation();

  const submitting = useRef(false);

  const formRef = useRef<HTMLFormElement>(null);
  const schoolRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const telephoneNumberRef = useRef<HTMLInputElement>(null);
  const emailOptInRef = useRef<HTMLInputElement>(null);
  const smsOptInRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (submitting.current) {
      return;
    }

    if (!formRef.current || !schoolRef.current || !emailAddressRef.current || !firstNameRef.current || !lastNameRef.current) {
      return;
    }

    const form = formRef.current;
    const schoolInput = schoolRef.current;
    const emailAddressInput = emailAddressRef.current;
    const firstNameInput = firstNameRef.current;
    const lastNameInput = lastNameRef.current;

    Promise.resolve().then(async () => {
      submitting.current = true;

      const testGroup = getHiddenField('testGroup', hiddenFields);
      const gclid = getHiddenField('gclid', hiddenFields);
      const msclkid = getHiddenField('msclkid', hiddenFields);

      return addLead({
        school: schoolInput.value,
        emailAddress: emailAddressInput.value,
        firstName: firstNameInput.value || null,
        lastName: lastNameInput.value || null,
        telephoneNumber: telephoneNumberRef.current?.value || null, // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
        emailOptIn: emailOptInRef.current?.checked ?? null,
        smsOptIn: smsOptInRef.current?.checked ?? null,
        countryCode: location?.countryCode ?? null,
        provinceCode: location?.provinceCode ?? null,
        testGroup: typeof testGroup === 'string' ? parseInt(testGroup, 10) : testGroup,
        gclid: typeof gclid === 'number' ? gclid.toString() : gclid,
        msclkid: typeof msclkid === 'number' ? msclkid.toString() : msclkid,
        marketing: marketing ?? undefined,
        courses: courses,
      });
    }).catch(err => {
      console.error('Error adding lead', err);
    }).finally(() => {
      form.submit();
      submitting.current = false;
    });
  };

  return (
    <form ref={formRef} action={action} method="post" onSubmit={handleSubmit}>
      <input ref={schoolRef} type="hidden" name="school" value="QC Wellness Studies" />
      {hiddenFields?.map(h => (
        <input key={h.key} type="hidden" name={h.key} value={h.value} />
      ))}
      {location?.countryCode && <input type="hidden" name="countryCode" value={location.countryCode} />}
      {location?.provinceCode && <input type="hidden" name="provinceCode" value={location.provinceCode} />}
      <div className="mb-4">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input ref={firstNameRef} type="text" id="firstName" name="firstName" className="form-control" autoComplete="given-name" autoCapitalize="words" defaultValue={initialValues?.firstName ?? ''} />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input ref={lastNameRef} type="text" id="lastName" name="lastName" className="form-control" autoComplete="family-name" autoCapitalize="words" defaultValue={initialValues?.lastName ?? ''} />
      </div>
      <div className="mb-4">
        <label htmlFor="emailAddress" className="form-label">Email Address <span className="text-secondary">*</span></label>
        <input ref={emailAddressRef} type="email" id="emailAddress" name="emailAddress" className="form-control" autoComplete="email" required defaultValue={initialValues?.emailAddress ?? ''} />
      </div>
      {phoneNumber && (
        <div className="mb-4">
          <label htmlFor="telephoneNumber" className="form-label">Phone Number</label>
          <input ref={telephoneNumberRef} type="tel" id="telephoneNumber" name="telephoneNumber" className="form-control" autoComplete="tel" defaultValue={initialValues?.telephoneNumber ?? ''} />
        </div>
      )}
      <div className="mb-4">
        <div className="form-check">
          <input ref={emailOptInRef} className="form-check-input" type="checkbox" id="emailOptIn" name="emailOptIn" value="yes" defaultChecked={initialValues?.emailOptIn ?? false} />
          <label className="form-check-label" htmlFor="emailOptIn">
            I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!
          </label>
        </div>
      </div>
      {phoneNumber && (
        <>
          <div className="mb-4">
            <div className="form-check">
              <input ref={smsOptInRef} className="form-check-input" type="checkbox" id="smsOptIn" name="smsOptIn" value="yes" defaultChecked={initialValues?.smsOptIn ?? false} />
              <label className="form-check-label" htmlFor="smsOptIn">
                I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply.
              </label>
            </div>
          </div>
        </>
      )}
      {errors && <p className="text-danger mb-4" style={{ marginTop: '-0.5rem' }}>Please complete all required form fields.</p>}
      <button className={buttonClassName ?? 'btn btn-primary'} type="submit">{buttonText}</button>
    </form>
  );
};
