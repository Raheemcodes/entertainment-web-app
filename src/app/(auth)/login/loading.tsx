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

        <div className={classes['form-field']}>
          <InputField className='skeleton'>
            <input type='email' name='email' autoComplete='email' />
            <div className={classes['error-msg']}>Invalid Email</div>
          </InputField>

          <InputField className='skeleton'>
            <input type='email' name='email' autoComplete='email' />
            <div className={classes['error-msg']}>Invalid Email</div>
          </InputField>
        </div>

        <div className={classes['error-msg']} style={{ opacity: 0 }}>
          Invalid email or password Try again!
        </div>

        <SubmitButton disabled={false} className='skeleton'>
          Signup to your account
        </SubmitButton>

        <p className={`${classes['ps']} skeleton`}>
          Alread have an account? Login
        </p>
      </AuthForm>
    </AuthLayout>
  );
}
