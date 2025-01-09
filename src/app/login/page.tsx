import { JSX } from 'react';
import classes from '@/components/auth/form/AuthForm.module.scss';
import AuthLayout from '@/components/auth/layout/AuthLayout';
import AuthForm from '@/components/auth/form/AuthForm';
import SubmitButton from '@/components/submit-btn/SubmitButton';

const LoginPage = (): JSX.Element => {
  return (
    <AuthLayout>
      <AuthForm>
        <h1 className={classes['title']}>Login</h1>

        <div className={classes['form-field']}>
          <div className={`${classes['input-field']}`}>
            <input type='email' name='email' placeholder='Email address' />
            <div className={classes['error-msg']}>Can’t be empty</div>
          </div>
        </div>

        <div className={classes['form-field']}>
          <div className={`${classes['input-field']} ${classes['invalid']}`}>
            <input type='password' name='password' placeholder='Password' />
            <div className={classes['error-msg']}>Password</div>
          </div>
        </div>

        <SubmitButton>Login to your account</SubmitButton>

        <p className={classes['ps']}>
          Don’t have an account?{' '}
          <button className={classes['redirect-btn']}>Sign Up</button>
        </p>
      </AuthForm>
    </AuthLayout>
  );
};

export default LoginPage;
