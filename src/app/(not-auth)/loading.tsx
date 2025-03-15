import FilmLoading from '@/components/film-loading/FilmLoading';
import { JSX } from 'react';
import classes from '../page.module.scss';
import TrendingLoading from '@/components/trending-loading/TrendingLoading';

export default function Loading(): JSX.Element {
  return (
    <>
      <section className={classes['section']} id='recommended'>
        <h2
          className={`${classes['title']} skeleton`}
          style={{ display: 'inline-block' }}
        >
          Trending
        </h2>

        <TrendingLoading />
      </section>

      <section className={classes['section']} id='recommended'>
        <h2
          className={`${classes['title']} skeleton`}
          style={{ display: 'inline-block' }}
        >
          Recommended for you
        </h2>

        <FilmLoading />
      </section>
    </>
  );
}
