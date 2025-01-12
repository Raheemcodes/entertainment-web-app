import { JSX } from 'react';
import classes from './TrendingList.module.scss';
import TrendingItem from './trending-item/TrendingItem';

const TrendingList = (): JSX.Element => {
  return (
    <ul className={classes['list']}>
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
    </ul>
  );
};

export default TrendingList;
