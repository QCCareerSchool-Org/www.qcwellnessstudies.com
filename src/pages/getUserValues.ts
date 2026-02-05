import type { IncomingMessage } from 'http';

import type { UserValues } from '@/domain/userValues';
import { isUserValues } from '@/domain/userValues';
import { getCookie } from '@/lib/getCookie';
import { decodeJwt } from '@/lib/jwt';

interface Context {
  req?: IncomingMessage;
}

export const getUserValues = async (ctx: Context): Promise<UserValues | undefined> => {
  const jwt = getCookie(ctx, 'user');
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  return raw && isUserValues(raw) ? raw : undefined;
};
