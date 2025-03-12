import FilmLoading from '@/components/film-loading/FilmLoading';
import { JSX } from 'react';
import classes from '../../page.module.scss';

export default function Loading(): JSX.Element {
  return (
    <section className={classes['section']} id='recommended'>
      <h2
        className={`${classes['title']} skeleton`}
        style={{ display: 'inline-block' }}
      >
        Recommended for you
      </h2>

      <FilmLoading />
    </section>
  );
}
