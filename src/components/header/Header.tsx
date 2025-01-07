import { JSX } from 'react';
import classes from './Header.module.scss';
import HeaderNav from './nav/HeaderNav';
import Image from 'next/image';
import Logo from '../icons/Logo';

const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo />
        </div>

        <HeaderNav />

        <div className={classes.avatar}>
          <Image
            src='/images/image-avatar.png'
            width={80}
            height={80}
            alt='Avatar'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
