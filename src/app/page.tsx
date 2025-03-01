import FilmList from '@/components/film-list/FilmList';
import TrendingList from '@/components/trending-list/TrendingList';
import classes from './page.module.scss';

export default function Home() {
  return (
    <>
      <section className={classes['section']} id='trending'>
        <h2 className={classes['title']}>Trending</h2>

        <TrendingList />
      </section>

      <section className={classes['section']} id='recommended'>
        <h2 className={classes['title']}>Recommended for you</h2>

        <FilmList />
      </section>
    </>
  );
}
