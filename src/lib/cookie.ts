import { serialize } from 'cookie';

const MAX_AGE = 60 * 86_400; // 60 days

type SameSite = boolean | 'lax' | 'strict' | 'none' | undefined;

export const createCookie = (
  name: string,
  value: string,
  httpOnly = true,
  secure = process.env.NODE_ENV === 'production',
  sameSite: SameSite = 'lax',
  path = '/',
  maxAge = MAX_AGE,
): string => {
  return serialize(name, value, { httpOnly, secure, sameSite, path, maxAge });
};
