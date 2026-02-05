import type { NextApiRequest, NextApiResponse } from 'next';

import { isCookieData } from '@/domain/cookie';

const MAX_AGE = 60 * 86_400; // 60 days

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ success: false });
    return;
  }

  const cookieData: unknown = req.body;

  if (!isCookieData(cookieData)) {
    res.status(400).json({ success: false });
    return;
  }

  const {
    name,
    value,
    httpOnly = false,
    secure = process.env.NODE_ENV === 'production',
    maxAge = MAX_AGE,
    path = '/',
    domain,
    priority,
    sameSite = 'lax',
  } = cookieData;

  // Build cookie string manually
  const parts: string[] = [
    `${name}=${encodeURIComponent(value)}`,
    `Max-Age=${maxAge}`,
    `Path=${path}`,
    `SameSite=${sameSite}`,
  ];

  if (httpOnly) { parts.push('HttpOnly'); }
  if (secure) { parts.push('Secure'); }
  if (domain) { parts.push(`Domain=${domain}`); }
  if (priority) { parts.push(`Priority=${priority}`); }

  res.setHeader('Set-Cookie', parts.join('; '));

  res.status(200).json({ success: true });
};

export default handler;
