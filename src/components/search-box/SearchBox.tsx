'use client';

import { useRouter } from 'next/navigation';
import { FormEventHandler, JSX, useState } from 'react';
import SearchIcon from '../icons/SearchIcon';
import classes from './SearchBox.module.scss';

const SearchBox = ({ placeholder }: { placeholder: string }): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  let timeout: NodeJS.Timeout;

  const inputHandler: FormEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    setValue(value);

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (!value) {
        router.push('/');
        return;
      }
      // Update URL with query parameter
      router.push(`/search?key=${encodeURIComponent(value)}`);
    }, 300);
  };

  return (
    <div className={classes['container']}>
      <div className={classes['search-icon']}>
        <SearchIcon />
      </div>

      <input
        type='text'
        placeholder={`Search for ${placeholder}`}
        onInput={inputHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
