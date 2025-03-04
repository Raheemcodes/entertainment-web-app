'use server';

import { AuthError } from '@/models/error.model';
import { validateEmail, validatePassword } from '@/utils/validate.util';

export default async function signup(
  prevState: { error: AuthError } | undefined,
  formData: FormData
) {
  const error: AuthError = {
    email: '',
    password: '',
  };

  try {
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    console.log('Email:', email);
    console.log('Password:', password);

    if (validateEmail(email!)) error.email = 'Invalid email';
    if (validatePassword(password!)) error.password = 'Invalid password';

    return { error };
  } catch (error) {}
}
