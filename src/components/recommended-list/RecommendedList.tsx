import { JSX } from 'react';
import classes from './RecommendedList.module.scss';
import RecommendedItem from './recommended-item/RecommendedItem';

const RecommendedList = (): JSX.Element => {
  return (
    <ul className={classes['list']}>
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
    </ul>
  );
};

export default RecommendedList;
