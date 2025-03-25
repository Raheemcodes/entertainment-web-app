'use client';

import login from '@/actions/login.action';
import AuthForm from '@/components/auth/form/AuthForm';
import classes from '@/components/auth/form/AuthForm.module.scss';
import InputField from '@/components/auth/form/input-field/InputField';
import AuthLayout from '@/components/auth/layout/AuthLayout';
import SubmitButton from '@/components/submit-btn/SubmitButton';
import useValidation from '@/hooks/use-validation';
import Link from 'next/link';
import { JSX, useActionState, useEffect, useRef } from 'react';

const initialState: { error: string } = {
  error: '',
};

const LoginPage = (): JSX.Element => {
  const [state, formAction, pending] = useActionState(login, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const email = useValidation('invalid');
  const password = useValidation('invalid');
  const formIsValid = formRef.current?.checkValidity();

  useEffect(() => {
    if (!!state?.error) {
      email.setIsValid(false);
      password.setIsValid(false);
    }
  }, [state]);

  return (
    <AuthLayout>
      <AuthForm ref={formRef} action={formAction}>
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
              value={email.value}
              onChange={() => {}}
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
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+#^()_\-=[\]{}|;:',.<>/`~])(?!.*(.)\1{2})[A-Za-z\d@$!%*?&+#^()_\-=[\]{}|;:',.<>/`~]{8,}$"
              value={password.value}
              onChange={() => {}}
            />
            <div className={classes['error-msg']}>Strong Password</div>
          </InputField>
        </div>

        <div
          className={classes['error-msg']}
          style={{ opacity: !!state?.error ? '1' : '0' }}
        >
          Incorrect email or password. Try again!
        </div>

        <SubmitButton disabled={!formIsValid || pending}>
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
