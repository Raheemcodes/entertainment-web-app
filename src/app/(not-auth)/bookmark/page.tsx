import FilmList from '@/components/film-list/FilmList';
import { JSX } from 'react';
import classes from '../../page.module.scss';
import { getAllBookmarks } from '@/lib/data.lib';

export default async function BookmarkPage(): Promise<JSX.Element> {
  const bookmark = await getAllBookmarks();
  console.log(bookmark);

  return (
    <>
      <section className={classes['section']} id='movies'>
        <h2 className={classes['title']}>Bookmarked Movies</h2>

        <FilmList films={[]} />
      </section>

      <section className={classes['section']} id='movies'>
        <h2 className={classes['title']}>Bookmarked TV Series</h2>

        <FilmList films={[]} />
      </section>
    </>
  );
}
