import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

interface Props {
  href?: string;
  onClick?: () => void;
}

export const OptionalLink: FC<PropsWithChildren<Props>> = ({ href, children, onClick: handleClick }) => {
  if (href) {
    return (
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return <>{children}</>;
};
