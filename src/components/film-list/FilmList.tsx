import { IFilm } from '@/models/film.model';
import { JSX } from 'react';
import classes from './FilmList.module.scss';
import Film from './film/Film';

const FilmList = ({ films }: { films: IFilm[] }): JSX.Element => {
  return (
    <ul className={classes['list']}>
      {films.map((film) => (
        <Film film={film} key={film._id.toString()} />
      ))}
    </ul>
  );
};

export default FilmList;
