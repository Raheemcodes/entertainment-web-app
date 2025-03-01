import { JSX } from 'react';
import classes from './FilmList.module.scss';
import Film from './film/Film';

const FilmList = (): JSX.Element => {
  return (
    <ul className={classes['list']}>
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
    </ul>
  );
};

export default FilmList;
