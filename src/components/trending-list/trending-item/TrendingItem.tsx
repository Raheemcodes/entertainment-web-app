import { JSX } from 'react';
import classes from './TrendingItem.module.scss';
import Image from 'next/image';
import CicleIcon from '@/components/icons/CircleIcon';
import MoviesCategoryIcon from '@/components/icons/MoviesCategoryIcon';
import BookmarkIcon from '@/components/icons/BookmarkIcon';

const TrendingItem = (): JSX.Element => {
  return (
    <li className={classes['item']}>
      <div className={classes['img-container']}>
        <Image
          src='/assets/thumbnails/beyond-earth/trending/small.jpg'
          width={240}
          height={140}
          alt='Bottom Gear'
        />
        <Image
          className={classes['large']}
          src='/assets/thumbnails/beyond-earth/trending/large.jpg'
          width={470}
          height={230}
          alt='Bottom Gear'
        />
        <div className={classes['gradient']} />
      </div>

      <div className={classes['bookmark-container']}>
        <div className={classes['bookmark']}>
          <BookmarkIcon />
        </div>
      </div>

      <div className={classes['content']}>
        <div className={classes['details']}>
          <div className={classes['year']}>2019</div>

          <div className={classes['circle']}>
            <CicleIcon />
          </div>

          <div className={classes['type']}>
            <span className={classes['icon']}>
              <MoviesCategoryIcon />
            </span>

            <span>Movie</span>
          </div>

          <div className={classes['circle']}>
            <CicleIcon />
          </div>

          <div className={classes['rating']}>PG</div>
        </div>
        <div className={classes['title']}>Beyond Earth</div>
      </div>
    </li>
  );
};

export default TrendingItem;
