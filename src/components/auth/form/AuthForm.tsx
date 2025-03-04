import { PropsWithChildren, Ref } from 'react';
import classes from './AuthForm.module.scss';

type AuthFormType = PropsWithChildren<{
  ref: Ref<HTMLFormElement>;
  action: (formData: FormData) => void;
}>;

const AuthForm = ({ children, ref, action }: AuthFormType) => {
  return (
    <form className={classes['form']} ref={ref} action={action}>
      {children}
    </form>
  );
};

export default AuthForm;
