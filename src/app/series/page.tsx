import FilmList from '@/components/film-list/FilmList';
import { JSX } from 'react';
import classes from '../page.module.scss';

export default async function SeriesPage(): Promise<JSX.Element> {
  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>TV Series</h2>

      <FilmList />
    </section>
  );
}
