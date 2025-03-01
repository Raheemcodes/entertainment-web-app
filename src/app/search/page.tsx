import FilmList from '@/components/film-list/FilmList';
import { SearchParams } from 'next/dist/server/request/search-params';
import { JSX } from 'react';
import classes from '../page.module.scss';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<JSX.Element> {
  const { categories, key } = await searchParams;

  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>Found 2 results for ‘Earth’</h2>

      <FilmList />
    </section>
  );
}
