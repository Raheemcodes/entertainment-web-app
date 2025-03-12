import BookmarkIcon from '../icons/BookmarkIcon';
import classes from './BookmarkButton.module.scss';

export default function BookmarkButton({
  isBookmarked,
}: {
  isBookmarked: boolean;
}) {
  return (
    <div className={classes['bookmark-container']}>
      <div
        className={`${classes['bookmark']} ${
          isBookmarked ? classes['active'] : ''
        }`}
      >
        <BookmarkIcon />
      </div>
    </div>
  );
}
