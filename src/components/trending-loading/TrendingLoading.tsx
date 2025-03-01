import { JSX } from 'react';
import classes from './TrendingLoading.module.scss';

export default function TrendingLoading(): JSX.Element {
  return (
    <ul className={classes['list']}>
      {[...Array(6)].map((_, index) => (
        <li key={index} className={`${classes['item']} skeleton`} />
      ))}
    </ul>
  );
}
