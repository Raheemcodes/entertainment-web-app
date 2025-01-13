import { JSX } from 'react';
import classes from './RecommendedItem.module.scss';
import Image from 'next/image';
import CicleIcon from '@/components/icons/CircleIcon';
import MoviesCategoryIcon from '@/components/icons/MoviesCategoryIcon';
import BookmarkIcon from '@/components/icons/BookmarkIcon';

const RecommendedItem = (): JSX.Element => {
  return (
    <li className={classes['item']}>
      <div className={classes['img-container']}>
        <Image
          src={'/assets/thumbnails/the-great-lands/regular/small.jpg'}
          width={164}
          height={110}
          alt='The Great Lands'
        />
        <Image
          className={classes['medium']}
          src={'/assets/thumbnails/the-great-lands/regular/medium.jpg'}
          width={220}
          height={140}
          alt='The Great Lands'
        />
        <Image
          className={classes['large']}
          src={'/assets/thumbnails/the-great-lands/regular/large.jpg'}
          width={280}
          height={174}
          alt='The Great Lands'
        />

        <div className={classes['bookmark-container']}>
          <div className={classes['bookmark']}>
            <BookmarkIcon />
          </div>
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

          <div className={classes['rating']}>E</div>
        </div>
        <div className={classes['title']}>The Great Lands</div>
      </div>
    </li>
  );
};

export default RecommendedItem;
