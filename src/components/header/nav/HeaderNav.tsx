import { JSX } from 'react';
import classes from './HeaderNav.module.scss';
import HomeIcon from '@/components/icons/HomeIcom';
import MoviesIcon from '@/components/icons/MoviesIcon';
import ShowsIcon from '@/components/icons/ShowsIcon';
import BookmarkIcon from '@/components/icons/BookmarkIcon';

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
          <BookmarkIcon />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
