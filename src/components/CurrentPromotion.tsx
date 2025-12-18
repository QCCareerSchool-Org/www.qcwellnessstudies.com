import type { FC } from 'react';

import { NewYears2025 } from './promotions/newYears2025';

interface Props {
  date: number;
  countryCode: string;
  newYearsDiscountAmount?: number;
  newYearsEnrollHref?: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode, newYearsDiscountAmount, newYearsEnrollHref }) => {
  if (date >= Date.UTC(2025, 11, 16, 8) && date < Date.UTC(2026, 0, 3, 8)) { // 2025-12-26T03:00 (8:00 UTC) to 2026-01-03T03:00 (8:00 UTC)
    return (
      <NewYears2025
        countryCode={countryCode}
        discountAmount={newYearsDiscountAmount}
        enrollHref={newYearsEnrollHref}
      />
    );
  }

  return null;
};
