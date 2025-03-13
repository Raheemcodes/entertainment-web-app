'use server';

import { verifyAuth } from '@/lib/lucia.lib';
import { BookmarkState } from '@/models/bookmark.model';
import User from '@/models/user.model';

export const toggleBookmark = async (
  prevState: BookmarkState,
  formData: FormData
): Promise<BookmarkState> => {
  const id = formData.get('id') as string;

  try {
    const { user: sessionUser } = await verifyAuth();
    if (!sessionUser) {
      return { added: !!prevState?.added, error: '', redirect: '/login' };
    }

    const user = await User.findById(sessionUser?.id);

    if (!user) {
      return { added: !!prevState?.added, error: 'User not found! Re-login' };
    }

    if (user.bookmark.includes(id)) {
      user.bookmark = user.bookmark.filter((bookmarkId) => bookmarkId !== id);
    } else user.bookmark.push(id);

    await user.save();

    return { added: user.bookmark.includes(id), error: '' };
  } catch (err) {
    console.error(err);
    return {
      added: !!prevState?.added,
      error: 'Failed to bookmark! Please try again',
    };
  }
};
