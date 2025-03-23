import FilmList from '@/components/film-list/FilmList';
import { SearchParams } from 'next/dist/server/request/search-params';
import { JSX } from 'react';
import classes from '../../page.module.scss';
import { IFilm } from '@/models/film.model';
import { getSearch } from '@/lib/data.lib';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<JSX.Element> {
  const { key } = await searchParams;
  const films: IFilm[] = await getSearch(key!);

  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>
        Found {films.length} results for ‘{key}’
      </h2>

      <FilmList films={films} />
    </section>
  );
}
