'use server';

import { verifyAuth } from '@/lib/lucia.lib';
import User from '@/models/user.model';

export const addToBookmark = async (id: string) => {
  const { user: sessionUser } = await verifyAuth();
  const user = await User.findById(sessionUser?.id);

  user?.bookmark.push(id);
  user?.save();
};

export const removeFromBookmark = async (id: string) => {
  const { user: sessionUser } = await verifyAuth();
  const user = await User.findById(sessionUser?.id);

  if (user) {
    user.bookmark = user.bookmark.filter((bookmarkId) => bookmarkId !== id);
    user.save();
  }
};
