'use client';

import AuthForm from '@/components/auth/form/AuthForm';
import classes from '@/components/auth/form/AuthForm.module.scss';
import InputField from '@/components/auth/form/input-field/InputField';
import AuthLayout from '@/components/auth/layout/AuthLayout';
import SubmitButton from '@/components/submit-btn/SubmitButton';
import useValidation from '@/hooks/use-validation';
import Link from 'next/link';
import { JSX, useRef } from 'react';

const LoginPage = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const email = useValidation('invalid');
  const password = useValidation('invalid');
  const formIsValid = formRef.current?.checkValidity();

  return (
    <AuthLayout>
      <AuthForm ref={formRef}>
        <h1 className={classes['title']}>Login</h1>

        <div className={classes['form-field']}>
          <InputField className={email.className!}>
            <input
              type='email'
              name='email'
              placeholder='Email address'
              ref={email.ref}
              required
              autoComplete='email'
            />
            <div className={classes['error-msg']}>Invalid Email</div>
          </InputField>

          <InputField className={password.className!}>
            <input
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='current-password'
              ref={password.ref}
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
            />
            <div className={classes['error-msg']}>Strong Password</div>
          </InputField>
        </div>

        <SubmitButton disabled={!formIsValid}>
          Login to your account
        </SubmitButton>

        <p className={classes['ps']}>
          Don’t have an account?{' '}
          <Link className={classes['redirect-btn']} href='/signup'>
            Sign Up
          </Link>
        </p>
      </AuthForm>
    </AuthLayout>
  );
};

export default LoginPage;
