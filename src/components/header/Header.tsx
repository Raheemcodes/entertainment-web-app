import Link from 'next/link';
import { JSX } from 'react';
import Logo from '../icons/Logo';
import classes from './Header.module.scss';
import HeaderNav from './nav/HeaderNav';
import Avatar from './Avatar';

const Header = async (): Promise<JSX.Element> => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link href='/login' className={classes.logo}>
          <Logo />
        </Link>

        <HeaderNav />

        <Avatar />
      </div>
    </header>
  );
};

export default Header;
