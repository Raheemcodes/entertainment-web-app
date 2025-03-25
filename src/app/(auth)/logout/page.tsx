'use client';

import logout from '@/actions/logout.action';
import AuthForm from '@/components/auth/form/AuthForm';
import classes from '@/components/auth/form/AuthForm.module.scss';
import AuthLayout from '@/components/auth/layout/AuthLayout';
import SubmitButton from '@/components/submit-btn/SubmitButton';
import Link from 'next/link';
import { JSX, useActionState } from 'react';

const initialState: { error: string } = {
  error: '',
};

const LogoutPage = (): JSX.Element => {
  const [state, formAction, pending] = useActionState(logout, initialState);

  return (
    <AuthLayout>
      <AuthForm action={formAction}>
        <h1 className={classes['title']}>Logout</h1>

        <div
          className={classes['error-msg']}
          style={{ opacity: !!state?.error ? '1' : '0' }}
        >
          Logout failed. Try again!
        </div>

        <SubmitButton disabled={pending}>Logout of your account</SubmitButton>

        <p className={classes['ps']}>
          Not sure?{' '}
          <Link className={classes['redirect-btn']} href='..'>
            Go back
          </Link>
        </p>
      </AuthForm>
    </AuthLayout>
  );
};

export default LogoutPage;
