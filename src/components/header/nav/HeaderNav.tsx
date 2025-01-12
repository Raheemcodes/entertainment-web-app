import HomeIcon from '@/components/icons/HomeIcom';
import MoviesIcon from '@/components/icons/MoviesIcon';
import NavBookmarkIcon from '@/components/icons/NavBookmarkIcon';
import ShowsIcon from '@/components/icons/ShowsIcon';
import { JSX } from 'react';
import classes from './HeaderNav.module.scss';

const HeaderNav = (): JSX.Element => {
  return (
    <nav className={classes['nav']}>
      <ul className={classes['nav-list']}>
        <li className={classes['nav-item']}>
          <HomeIcon />
        </li>
        <li className={classes['nav-item']}>
          <MoviesIcon />
        </li>
        <li className={classes['nav-item']}>
          <ShowsIcon />
        </li>
        <li className={classes['nav-item']}>
          <NavBookmarkIcon />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
