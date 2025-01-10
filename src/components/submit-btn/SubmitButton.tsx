import { JSX, PropsWithChildren } from 'react';
import classess from './SubmitButton.module.scss';

const SubmitButton = ({
  children,
  disabled,
}: PropsWithChildren<{ disabled: boolean }>): JSX.Element => {
  return (
    <button className={classess.button} type='submit' disabled={disabled}>
      {children}
    </button>
  );
};

export default SubmitButton;
