'use server';

import { destroySession } from '@/lib/lucia.lib';
import { redirect } from 'next/navigation';

export default async function logout(): Promise<{ error: string } | undefined> {
  try {
    await destroySession();
    redirect('/');
  } catch (error: any) {
    if (error.message !== 'NEXT_REDIRECT') {
      console.error(error);
      return { error: 'Error logging out.' };
    }
    throw error;
  }
}
