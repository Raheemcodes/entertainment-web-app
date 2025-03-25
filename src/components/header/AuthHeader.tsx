import Image from 'next/image';
import { JSX } from 'react';
import Logo from '../icons/Logo';
import classes from './Header.module.scss';
import HeaderNav from './nav/HeaderNav';
import Link from 'next/link';

const AuthHeader = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href='/login' className={classes.logo}>
          <Logo />
        </Link>

        <HeaderNav />

        <Link className={classes.avatar} href='/logout'>
          <Image
            src='/images/image-avatar.png'
            width={80}
            height={80}
            alt='Avatar'
          />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
