'use server';

import { createAuthSession } from '@/lib/lucia.lib';
import { connectDatabase, disconnectDatabase } from '@/lib/mongo.lib';
import User from '@/models/user.model';
import { validateEmail, validatePassword } from '@/utils/validate.util';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export default async function signup(
  prevState: { error: string } | undefined,
  formData: FormData
): Promise<{ error: string } | undefined> {
  try {
    let error: string = '';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!validateEmail(email!) || !validatePassword(password!)) {
      error = 'Invalid email or password';
      return { error };
    }

    await connectDatabase();

    const user = await User.findOne({ email });

    if (user) {
      error = 'Invalid email or password';
      return { error };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ email, password: hashedPassword });
    await createAuthSession(newUser._id);

    redirect('/');
  } catch (error: any) {
    if (error.message !== 'NEXT_REDIRECT') {
      console.error(error);
      return { error: 'Error signing up.' };
    }
    throw error;
  }
}
