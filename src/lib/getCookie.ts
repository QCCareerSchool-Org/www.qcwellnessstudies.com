import type { IncomingMessage } from 'http';

interface Context {
  req?: IncomingMessage;
}

export const getCookie = (ctx: Context, name: string): string | undefined => {
  const cookieHeader = ctx.req?.headers.cookie ?? '';
  const parts = cookieHeader.split(';').map(p => p.trim());
  const match = parts.find(p => p.startsWith(name + '='));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
};
