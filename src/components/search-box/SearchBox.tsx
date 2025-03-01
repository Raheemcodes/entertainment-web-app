import { JSX } from 'react';
import classes from './SearchBox.module.scss';
import SearchIcon from '../icons/SearchIcon';

const SearchBox = ({ placeholder }: { placeholder: string }): JSX.Element => {
  return (
    <form className={classes['container']}>
      <div className={classes['search-icon']}>
        <SearchIcon />
      </div>

      <input type='text' placeholder={`Search for ${placeholder}`} />
    </form>
  );
};

export default SearchBox;
