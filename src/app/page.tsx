import SearchBox from '@/components/search-box/SearchBox';
import classes from './page.module.scss';
import TrendingList from '@/components/trending-list/TrendingList';

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
    </div>
  );
}
