import FilmList from '@/components/film-list/FilmList';
import { getAllMovies } from '@/lib/data.lib';
import { JSX } from 'react';
import classes from '../../page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entertainment App - Movies',
};

export default async function MoviesPage(): Promise<JSX.Element> {
  const movies = await getAllMovies();

  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>Movies</h2>

      <FilmList films={movies} />
    </section>
  );
}
