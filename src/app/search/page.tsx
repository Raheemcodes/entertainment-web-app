import FilmList from '@/components/film-list/FilmList';
import { SearchParams } from 'next/dist/server/request/search-params';
import { JSX, Suspense } from 'react';
import classes from '../page.module.scss';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<JSX.Element> {
  const { categories, key } = await searchParams;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className={classes['section']} id='recommended'>
      <h2 className={classes['title']}>Recommended for you</h2>

      <FilmList />
    </section>
  );
}
