import type { GetServerSidePropsContext } from 'next';

export const getHeader = (context: GetServerSidePropsContext, headerName: string): string | null => {
  const rawHeader = context.req.headers[headerName];
  if (Array.isArray(rawHeader)) {
    return rawHeader[0] ?? null;
  }
  return rawHeader ?? null;
};
