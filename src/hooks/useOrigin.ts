// import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export const useOrigin = (): string | undefined => {
  // const path = usePathname();
  const router = useRouter();
  const path = router.asPath.split('?')[0];

  if (typeof window === 'undefined') {
    return path;
  }

  const { protocol, host } = window.location;
  return `${protocol}//${host}${path}`;
};
