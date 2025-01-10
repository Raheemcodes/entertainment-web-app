import { JSX, PropsWithChildren } from 'react';
import classes from './AuthLayout.module.scss';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';

const AuthLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className={classes['container']}>
      <Link href='/'>
        <div className={classes['logo']}>
          <Logo />
        </div>
      </Link>
      {children}
    </div>
  );
};

export default AuthLayout;
