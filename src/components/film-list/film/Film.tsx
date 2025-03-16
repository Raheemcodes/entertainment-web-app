import BookmarkButton from '@/components/bookmark-button/BookmarkButton';
import CicleIcon from '@/components/icons/CircleIcon';
import MoviesCategoryIcon from '@/components/icons/MoviesCategoryIcon';
import SeriesCategoryIcon from '@/components/icons/SeriesCategoryIcon';
import { IFilm } from '@/models/film.model';
import Image from 'next/image';
import { JSX } from 'react';
import classes from './Film.module.scss';

const Film = ({ film }: { film: IFilm }): JSX.Element => {
  return (
    <li className={classes['item']}>
      <div className={classes['img-container']}>
        <Image
          src={film.thumbnail.regular.small}
          width={164}
          height={110}
          alt={film.title}
        />
        <Image
          className={classes['medium']}
          src={film.thumbnail.regular.medium}
          width={220}
          height={140}
          alt={film.title}
        />
        <Image
          className={classes['large']}
          src={film.thumbnail.regular.large}
          width={280}
          height={174}
          alt={film.title}
        />

        <BookmarkButton
          isBookmarked={film.isBookmarked}
          id={film._id.toString()}
        />
      </div>

      <div className={classes['content']}>
        <div className={classes['details']}>
          <div className={classes['year']}>{film.year}</div>

          <div className={classes['circle']}>
            <CicleIcon />
          </div>

          <div className={classes['type']}>
            <span className={classes['icon']}>
              {film.category == 'Movie' ? (
                <MoviesCategoryIcon />
              ) : (
                <SeriesCategoryIcon />
              )}
            </span>

            <span>{film.category}</span>
          </div>

          <div className={classes['circle']}>
            <CicleIcon />
          </div>

          <div className={classes['rating']}>{film.rating}</div>
        </div>
        <div className={classes['title']}>{film.title}</div>
      </div>
    </li>
  );
};

export default Film;
