// import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export const useOrigin = (): string => {
  // const path = usePathname();
  const router = useRouter();
  const path = router.asPath.split('?')[0];
  return `${window.location.protocol}//${window.location.host}${path}`;
};
