import FilmList from '@/components/film-list/FilmList';
import TrendingList from '@/components/trending-list/TrendingList';
import classes from '../page.module.scss';
import { getFilms, getTrendingFilms } from '@/lib/data.lib';

export default async function Home() {
  const [trendingFilms, films] = await Promise.all([
    getTrendingFilms(),
    getFilms(),
  ]);

  return (
    <>
      <section className={classes['section']} id='trending'>
        <h2 className={classes['title']}>Trending</h2>

        <TrendingList films={trendingFilms} />
      </section>

      <section className={classes['section']} id='recommended'>
        <h2 className={classes['title']}>Recommended for you</h2>

        <FilmList films={films} />
      </section>
    </>
  );
}
