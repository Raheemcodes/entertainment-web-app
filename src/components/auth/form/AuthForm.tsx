import { FormEventHandler, PropsWithChildren, Ref, RefObject } from 'react';
import classes from './AuthForm.module.scss';

type AuthFormType = PropsWithChildren<{
  ref: Ref<HTMLFormElement>;
  onSubmit?: FormEventHandler;
}>;

const AuthForm = ({ children, ref, onSubmit }: AuthFormType) => {
  return (
    <form className={classes['form']} ref={ref} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default AuthForm;
