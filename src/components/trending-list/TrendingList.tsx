'use client';

import { JSX } from 'react';
import classes from './TrendingList.module.scss';
import TrendingItem from './trending-item/TrendingItem';
import useSwiper from '@/hooks/use-swiper';

const TrendingList = (): JSX.Element => {
  const swiper = useSwiper();

  return (
    <ul className={classes['list']} ref={swiper.ref}>
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
      <TrendingItem />
    </ul>
  );
};

export default TrendingList;
