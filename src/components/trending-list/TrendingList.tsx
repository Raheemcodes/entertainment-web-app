'use client';

import { JSX } from 'react';
import classes from './TrendingList.module.scss';
import TrendingItem from './trending-item/TrendingItem';
import useSwiper from '@/hooks/use-swiper';
import { IFilm } from '@/models/film.model';

const TrendingList = ({ films }: { films: IFilm[] }): JSX.Element => {
  const swiper = useSwiper();

  return (
    <ul className={classes['list']} ref={swiper.ref}>
      {films.map((film) => (
        <TrendingItem film={film} key={film._id} />
      ))}
    </ul>
  );
};

export default TrendingList;
