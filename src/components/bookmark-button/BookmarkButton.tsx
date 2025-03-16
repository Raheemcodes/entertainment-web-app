'use client';

import { toggleBookmark } from '@/actions/bookmark.action';
import { BookmarkState } from '@/models/bookmark.model';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import BookmarkIcon from '../icons/BookmarkIcon';
import classes from './BookmarkButton.module.scss';

export default function BookmarkButton({
  isBookmarked,
  id,
  onClick,
}: {
  isBookmarked: boolean;
  id: string;
  onClick?: (val: boolean) => void;
}) {
  const router = useRouter();
  const initialState: BookmarkState = {
    added: isBookmarked,
    error: '',
  };
  const [state, formAction, pending] = useActionState(
    toggleBookmark,
    initialState
  );
  const optimisticState = pending ? !state.added : state.added;

  // Show error message if the action fails
  useEffect(() => {
    if (!!state.redirect) router.push(state.redirect);
    if (!!state.error) alert(state.error);
  }, [state]);

  useEffect(() => {
    if (onClick) {
      onClick(optimisticState);
    }
  }, [pending]);

  const action = (formData: FormData) => {
    if (pending) return;
    formAction(formData);
  };

  return (
    <form className={classes['bookmark-form']} action={action}>
      <button className={classes['bookmark-button']}>
        <input
          type='text'
          name='id'
          value={id}
          hidden={true}
          onChange={() => {}}
        />
        <div
          className={`${classes['bookmark']} ${
            optimisticState ? classes['active'] : ''
          }`}
        >
          <BookmarkIcon />
        </div>
      </button>
    </form>
  );
}
