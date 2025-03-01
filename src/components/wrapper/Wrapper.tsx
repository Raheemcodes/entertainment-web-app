'use client';

import SearchBox from '@/components/search-box/SearchBox';
import { PropsWithChildren } from 'react';
import classes from './Wrapper.module.scss';
import { usePathname } from 'next/navigation';

export default function Wrapper({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isAuth = ['/login', '/signup'].includes(pathname);

  return isAuth ? (
    children
  ) : (
    <div className={classes['container']}>
      <div className={classes['search-box']}>
        <SearchBox placeholder='movies or TV series' />
      </div>

      {children}
    </div>
  );
}
