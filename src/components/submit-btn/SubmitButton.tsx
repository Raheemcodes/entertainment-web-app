import { JSX, PropsWithChildren } from 'react';
import classess from './SubmitButton.module.scss';

const SubmitButton = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <button className={classess.button} type='submit'>
      {children}
    </button>
  );
};

export default SubmitButton;
