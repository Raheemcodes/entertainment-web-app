'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import classes from './NavLink.module.scss';

export default function NavLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  const pathname: string = usePathname();
  const isActive: boolean = pathname == href;

  return (
    <Link
      href={href}
      className={`${classes['link']} ${isActive ? classes['active'] : ''}`}
      as={href}
    >
      {children}
    </Link>
  );
}
