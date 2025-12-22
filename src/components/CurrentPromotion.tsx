import type { FC } from 'react';

import { CyberMonday2025 } from './promotions/cyberMonday2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  const cyberMondayStart = Date.UTC(2025, 10, 29, 5); // 2025-11-29T00:00 (05:00 UTC)
  const cyberMondayEnd = Date.UTC(2025, 11, 4, 8); // 2025-12-04T03:00 (08:00 UTC)

  if (date >= cyberMondayStart && date < cyberMondayEnd) {
    return <CyberMonday2025 countryCode={countryCode} />;
  }

  return null;
};
