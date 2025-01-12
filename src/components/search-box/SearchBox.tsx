import { JSX } from 'react';
import classes from './SearchBox.module.scss';
import SearchIcon from '../icons/SearchIcon';

const SearchBox = (): JSX.Element => {
  return (
    <form className={classes['container']}>
      <div className={classes['search-icon']}>
        <SearchIcon />
      </div>

      <input type='text' placeholder='Search for movies or TV series' />
    </form>
  );
};

export default SearchBox;
