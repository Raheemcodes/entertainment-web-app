import BookmarkedFilmList from '@/components/film-list/BookmarkedFilmList';
import { getAllBookmarks } from '@/lib/data.lib';
import { JSX } from 'react';
import classes from '../../page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entertainment App - Bookmark',
};

export default async function BookmarkPage(): Promise<JSX.Element> {
  const { movies, series } = await getAllBookmarks();

  return (
    <>
      {!movies.length && !series.length && (
        <p className={classes['title']}>Bookmark emply</p>
      )}

      {!!movies.length && (
        <section className={classes['section']} id='movies'>
          <h2 className={classes['title']}>Bookmarked Movies</h2>

          <BookmarkedFilmList films={movies} />
        </section>
      )}

      {!!series.length && (
        <section className={classes['section']} id='movies'>
          <h2 className={classes['title']}>Bookmarked TV Series</h2>

          <BookmarkedFilmList films={series} />
        </section>
      )}
    </>
  );
}
