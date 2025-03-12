import FilmList from '@/components/film-list/FilmList';
import { getAllSeries } from '@/lib/data.lib';
import { JSX } from 'react';
import classes from '../../page.module.scss';

export default async function SeriesPage(): Promise<JSX.Element> {
  const series = await getAllSeries();

  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>TV Series</h2>

      <FilmList films={series} />
    </section>
  );
}
