import type { FC } from 'react';

import { NewYears2025 } from './promotions/newYears2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 3, 8)) { // 2025-12-01T00:00 (05:00 UTC) to 2025-12-06T03:00 (08:00 UTC)
    return <NewYears2025 countryCode={countryCode} />;
  }
};
