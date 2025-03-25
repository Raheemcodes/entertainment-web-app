'use server';

import { verifyAuth } from '@/lib/lucia.lib';
import { BookmarkState } from '@/models/bookmark.model';
import User from '@/models/user.model';
import { Types } from 'mongoose';

export const toggleBookmark = async (
  prevState: BookmarkState,
  formData: FormData
): Promise<BookmarkState> => {
  const id = formData.get('id') as string;
  const objectId = new Types.ObjectId(id);

  try {
    const { user: sessionUser } = await verifyAuth();
    if (!sessionUser) {
      return { added: !!prevState?.added, error: '', redirect: '/login' };
    }

    const user = await User.findById(sessionUser?.id);
    if (!user) {
      return { added: !!prevState?.added, error: '', redirect: '/login' };
    }

    if (user.bookmark.includes(objectId)) {
      user.bookmark = user.bookmark.filter(
        (bookmarkId) => bookmarkId.toString() !== id
      );
    } else user.bookmark.push(objectId);

    await user?.save();

    return { added: user.bookmark.includes(objectId), error: '' };
  } catch (err) {
    console.error(err);
    return {
      added: !!prevState?.added,
      error: 'Failed to bookmark! Please try again',
    };
  }
};
