'use client';

import { useActionState, useEffect, useState } from 'react';
import BookmarkIcon from '../icons/BookmarkIcon';
import classes from './BookmarkButton.module.scss';
import { toggleBookmark } from '@/actions/bookmark.action';
import { BookmarkState } from '@/models/bookmark.model';
import { useRouter } from 'next/navigation';

export default function BookmarkButton({
  isBookmarked,
  id,
}: {
  isBookmarked: boolean;
  id: string;
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

  return (
    <form className={classes['bookmark-form']} action={formAction}>
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
