import HomeIcon from '@/components/icons/HomeIcom';
import MoviesIcon from '@/components/icons/MoviesIcon';
import NavBookmarkIcon from '@/components/icons/NavBookmarkIcon';
import ShowsIcon from '@/components/icons/ShowsIcon';
import { JSX } from 'react';
import classes from './HeaderNav.module.scss';
import NavLink from '@/components/nav-link/NavLink';

const HeaderNav = (): JSX.Element => {
  return (
    <nav className={classes['nav']}>
      <ul className={classes['nav-list']}>
        <li className={classes['nav-item']}>
          <NavLink href='/'>
            <HomeIcon />
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink href='/movies'>
            <MoviesIcon />
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink href='/series'>
            <ShowsIcon />
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink href='/bookmark'>
            <NavBookmarkIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
