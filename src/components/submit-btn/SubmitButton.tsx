import { JSX, PropsWithChildren } from 'react';
import classess from './SubmitButton.module.scss';

const SubmitButton = ({
  children,
  disabled,
  className = '',
}: PropsWithChildren<{
  disabled: boolean;
  className?: string;
}>): JSX.Element => {
  return (
    <button
      className={`${classess.button} ${className}`}
      type='submit'
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
