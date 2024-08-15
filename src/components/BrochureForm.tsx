import React, { ChangeEventHandler, FC, FormEventHandler, useReducer, useRef } from 'react';

import { addLead } from '../lib/leads';
import { isSchool } from '../models/school';
import { Spinner } from './Spinner';

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

type State = {
  formSubmitting: boolean;
  telephoneNumber: string;
  smsOptIn: boolean;
  telephoneError: boolean;
  telephoneErrorMessage?: string;
};

type Action =
  | { type: 'FORM_SUBMITTED' }
  | { type: 'FORM_COMPLETE' }
  | { type: 'TELEPHONE_NUMBER_CHANGED'; payload: string }
  | { type: 'SMS_OPT_IN_CHANGED'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FORM_SUBMITTED':
      return { ...state, formSubmitting: true };
    case 'FORM_COMPLETE':
      return { ...state, formSubmitting: false };
    case 'TELEPHONE_NUMBER_CHANGED': {
      let telephoneError = false;
      let telephoneErrorMessage: string | undefined = undefined;
      if (state.smsOptIn && action.payload.length === 0) {
        telephoneError = true;
        telephoneErrorMessage = 'You have opted into getting text messages. A telephone number is required.';
      }
      return { ...state, telephoneNumber: action.payload, telephoneError, telephoneErrorMessage };
    }
    case 'SMS_OPT_IN_CHANGED': {
      let telephoneError = false;
      let telephoneErrorMessage: string | undefined = undefined;
      if (state.telephoneNumber.length === 0 && action.payload) {
        telephoneError = true;
        telephoneErrorMessage = 'You have opted into getting text messages. A telephone number is required.';
      }
      return { ...state, smsOptIn: action.payload, telephoneError, telephoneErrorMessage };
    }
  }
};

const initialState: State = { formSubmitting: false, telephoneNumber: '', smsOptIn: false, telephoneError: false };

const getHiddenField = (name: string, hiddenFields?: Array<{ key: string; value: string | number }>): string | number | null => {
  return hiddenFields?.find(({ key }) => key === name)?.value ?? null;
};

const disabledDelay = 5000;

// Do we need to keep track of the opt in date, or will Pardot do that? For telephoneOptIn too?

export const BrochureForm: FC<Props> = ({ action, phoneNumber = false, buttonText = 'Get the Catalog', buttonClassName, hiddenFields, marketing, courses, initialValues, errors }) => {
  const submitting = useRef(false);

  const formRef = useRef<HTMLFormElement>(null);
  const schoolRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const telephoneNumberRef = useRef<HTMLInputElement>(null);
  const emailOptInRef = useRef<HTMLInputElement>(null);
  const smsOptInRef = useRef<HTMLInputElement>(null);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleTelephoneNumberChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'TELEPHONE_NUMBER_CHANGED', payload: e.target.value });
  };

  const handleSMSOptInChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'SMS_OPT_IN_CHANGED', payload: e.target.checked });
  };

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

    dispatch({ type: 'FORM_SUBMITTED' });

    Promise.resolve().then(async () => {
      submitting.current = true;

      const gclid = getHiddenField('gclid', hiddenFields);
      const msclkid = getHiddenField('msclkid', hiddenFields);

      return addLead({
        school: isSchool(schoolInput.value) ? schoolInput.value : 'QC Wellness Studies',
        emailAddress: emailAddressInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        telephoneNumber: telephoneNumberRef.current?.value,
        emailOptIn: emailOptInRef.current?.checked ?? undefined,
        smsOptIn: smsOptInRef.current?.checked ?? undefined,
        gclid: typeof gclid === 'number' ? gclid.toString() : gclid ?? undefined,
        msclkid: typeof msclkid === 'number' ? msclkid.toString() : msclkid ?? undefined,
        marketing: marketing ?? undefined,
        courses: courses,
      });
    }).catch(err => {
      console.error('Error adding lead', err);
    }).then(async () => {
      form.submit();
      return new Promise(res => setTimeout(res, disabledDelay));
    }).finally(() => {
      dispatch({ type: 'FORM_COMPLETE' });
      submitting.current = false;
    });
  };

  return (
    <form ref={formRef} action={action} method="post" onSubmit={handleSubmit}>
      <input ref={schoolRef} type="hidden" name="school" value="QC Wellness Studies" />
      {hiddenFields?.map(h => (
        <input key={h.key} type="hidden" name={h.key} value={h.value} />
      ))}
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
          <input ref={telephoneNumberRef} onChange={handleTelephoneNumberChange} value={state.telephoneNumber} type="tel" id="telephoneNumber" name="telephoneNumber" className={`form-control ${state.telephoneError ? 'is-invalid' : ''}`} autoComplete="tel" defaultValue={initialValues?.telephoneNumber ?? ''} />
          {state.telephoneErrorMessage && <div className="invalid-feedback">{state.telephoneErrorMessage}</div>}
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
              <input ref={smsOptInRef} onChange={handleSMSOptInChange} checked={state.smsOptIn} className="form-check-input" type="checkbox" id="smsOptIn" name="smsOptIn" value="yes" defaultChecked={initialValues?.smsOptIn ?? false} />
              <label className="form-check-label" htmlFor="smsOptIn">
                I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply.
              </label>
            </div>
          </div>
        </>
      )}
      {errors && <p className="text-danger mb-4" style={{ marginTop: '-0.5rem' }}>Please complete all required form fields.</p>}
      <div className="d-flex align-items-center">
        <button className={buttonClassName ?? 'btn btn-primary'} type="submit" disabled={state.formSubmitting}>{buttonText}</button>
        {state.formSubmitting && <div className="ml-2"><Spinner /></div>}
      </div>
    </form>
  );
};
