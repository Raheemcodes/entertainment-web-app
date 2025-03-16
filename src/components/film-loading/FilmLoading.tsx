import { JSX } from 'react';
import classes from './FilmLoading.module.scss';
import CicleIcon from '../icons/CircleIcon';
import MoviesCategoryIcon from '../icons/MoviesCategoryIcon';

export default function FilmLoading(): JSX.Element {
  return (
    <ul className={classes['list']}>
      {[...Array(15)].map((_, index) => (
        <li key={index} className={classes['item']}>
          <div className={`${classes['img-container']} skeleton`}></div>

          <div className={classes['content']}>
            <div className={classes['details']}>
              <div className={`${classes['year']} skeleton`}>2019</div>

              <div className={classes['circle']}>
                <CicleIcon />
              </div>

              <div className={`${classes['type']} skeleton`}>
                <span className={classes['icon']}>
                  <MoviesCategoryIcon />
                </span>

                <span>Movie</span>
              </div>

              <div className={classes['circle']}>
                <CicleIcon />
              </div>

              <div className={`${classes['rating']} skeleton`}>E</div>
            </div>
            <div className={`${classes['title']} skeleton`}>
              The Great Lands Lands
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
