import FilmList from '@/components/film-list/FilmList';
import { JSX } from 'react';
import classes from '../page.module.scss';

export default async function MoviesPage(): Promise<JSX.Element> {
  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>Movies</h2>

      <FilmList />
    </section>
  );
}
