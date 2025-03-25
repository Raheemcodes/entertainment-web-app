import AuthForm from '@/components/auth/form/AuthForm';
import InputField from '@/components/auth/form/input-field/InputField';
import AuthLayout from '@/components/auth/layout/AuthLayout';
import SubmitButton from '@/components/submit-btn/SubmitButton';
import { JSX } from 'react';
import classes from '@/components/auth/form/AuthForm.module.scss';

export default function Loading(): JSX.Element {
  return (
    <AuthLayout>
      <AuthForm>
        <h1 className={`${classes['title']} skeleton`}>Sign Up</h1>

        <div className={classes['error-msg']} style={{ opacity: '0' }}>
          Logout failed. Try again!
        </div>

        <SubmitButton disabled={false} className='skeleton'>
          Logout of your account
        </SubmitButton>

        <p className={`${classes['ps']} skeleton`}>Not sure? Go back</p>
      </AuthForm>
    </AuthLayout>
  );
}
