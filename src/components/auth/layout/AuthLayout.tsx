import { JSX, PropsWithChildren } from 'react';
import classes from './AuthLayout.module.scss';
import Logo from '@/components/icons/Logo';

const AuthLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className={classes['container']}>
      <div className={classes['logo']}>
        <Logo />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
