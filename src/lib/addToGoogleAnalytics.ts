import Big from 'big.js';

import { Enrollment } from '../models/enrollment';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const precision = 2;

export const addToGoogleAnalytics = (enrollment: Enrollment): void => {
  window.gtag?.('event', 'purchase', {
    transaction_id: enrollment.id, // eslint-disable-line camelcase
    affiliation: enrollment.school,
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    tax: 0,
    shipping: 0,
    items: enrollment.courses.map(c => ({
      id: c.code, // eslint-disable-line camelcase
      name: c.name, // eslint-disable-line camelcase
      price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(precision)),
      quantity: 1,
    })),
  });
};
