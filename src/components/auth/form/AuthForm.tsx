import { PropsWithChildren } from 'react';
import classes from './AuthForm.module.scss';

const AuthForm = ({ children }: PropsWithChildren) => {
  return <form className={classes['form']}>{children}</form>;
};

export default AuthForm;
