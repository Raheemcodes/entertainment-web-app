import SearchBox from '@/components/search-box/SearchBox';
import { PropsWithChildren } from 'react';
import classes from './Wrapper.module.scss';

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className={classes['container']}>
      <div className={classes['search-box']}>
        <SearchBox placeholder='movies or TV series' />
      </div>

      {children}
    </div>
  );
}
