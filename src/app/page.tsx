import SearchBox from '@/components/search-box/SearchBox';
import classes from './page.module.scss';
import TrendingList from '@/components/trending-list/TrendingList';
import RecommendedList from '@/components/recommended-list/RecommendedList';

export default function Home() {
  return (
    <div className={classes['container']}>
      <div className={classes['search-box']}>
        <SearchBox />
      </div>

      <section id='trending'>
        <h2 className={classes['title']}>Trending</h2>

        <TrendingList />
      </section>

      <section id='recommended'>
        <h2 className={classes['title']}>Recommended for you</h2>

        <RecommendedList />
      </section>
    </div>
  );
}
