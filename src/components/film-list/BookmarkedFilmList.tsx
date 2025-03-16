import { IFilm } from '@/models/film.model';
import { JSX } from 'react';
import classes from './FilmList.module.scss';
import BookmarkedFilm from './film/BookmarkedFilm';

const BookmarkedFilmList = ({ films }: { films: IFilm[] }): JSX.Element => {
  return (
    <ul className={classes['list']}>
      {films.map((film) => (
        <BookmarkedFilm film={film} key={film._id.toString()} />
      ))}
    </ul>
  );
};

export default BookmarkedFilmList;
