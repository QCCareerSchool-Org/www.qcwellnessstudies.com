import type { GetServerSidePropsContext } from 'next';

export const getParam = (context: GetServerSidePropsContext, paramName: string): string | undefined => {
  if (Array.isArray(context.query[paramName])) {
    return context.query[paramName][0];
  }
  return context.query[paramName];
};
