import Big from 'big.js';

import type { Enrollment } from '../models/enrollment';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// log the page view with a specific URL
export const gaPageview = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url, // eslint-disable-line camelcase
  });
};

// log an event
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag('event', action, params);
};

const precision = 2;

export const gaSale = (enrollment: Enrollment): void => {
  const address: Record<string, string> = {
    first_name: enrollment.firstName, // eslint-disable-line camelcase
    last_name: enrollment.lastName, // eslint-disable-line camelcase
    street: enrollment.address1,
    city: enrollment.city,
    postal_code: enrollment.postalCode ?? '0', // eslint-disable-line camelcase
    country: enrollment.countryCode,
  };

  if (enrollment.provinceCode) {
    address.region = enrollment.provinceCode;
  }

  window.gtag('set', 'user_data', {
    email: enrollment.emailAddress,
    // phone_number: enrollment.telephoneNumber, // can't include phone_number because it must be in E.164 format and we don't explicitly ask for a telephone country code
    address,
  });

  // Google Analytics e-Commerce Event
  gaEvent('purchase', {
    transaction_id: enrollment.id.toString(), // eslint-disable-line camelcase
    affiliation: enrollment.school,
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map(c => ({
      id: c.code,
      name: c.name,
      price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
      quantity: 1,
    })),
  });

  // Google Ads Sale Conversion
  gaEvent('conversion', {
    send_to: 'AW-1071836607/rla_CMLg3ZgBEL_bi_8D', // eslint-disable-line camelcase
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    transaction_id: enrollment.id.toString(), // eslint-disable-line camelcase
  });
};
