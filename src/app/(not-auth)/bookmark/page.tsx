import BookmarkedFilmList from '@/components/film-list/BookmarkedFilmList';
import { getAllBookmarks } from '@/lib/data.lib';
import { JSX } from 'react';
import classes from '../../page.module.scss';

export default async function BookmarkPage(): Promise<JSX.Element> {
  const { movies, series } = await getAllBookmarks();

  return (
    <>
      <section className={classes['section']} id='movies'>
        <h2 className={classes['title']}>Bookmarked Movies</h2>

        <BookmarkedFilmList films={movies} />
      </section>

      <section className={classes['section']} id='movies'>
        <h2 className={classes['title']}>Bookmarked TV Series</h2>

        <BookmarkedFilmList films={series} />
      </section>
    </>
  );
}
