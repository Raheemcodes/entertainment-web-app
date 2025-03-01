import FilmList from '@/components/film-list/FilmList';
import { JSX } from 'react';
import classes from '../page.module.scss';

export default function BookmarkPage(): JSX.Element {
  return (
    <>
      <section className={classes['section']} id='movies'>
        <h2 className={classes['title']}>Bookmarked Movies</h2>

        <FilmList />
      </section>

      <section className={classes['section']} id='movies'>
        <h2 className={classes['title']}>Bookmarked TV Series</h2>

        <FilmList />
      </section>
    </>
  );
}
