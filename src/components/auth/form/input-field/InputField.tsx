import { JSX, PropsWithChildren } from 'react';
import classes from '../AuthForm.module.scss';

interface InputFieldType {
  className: string;
}

const InputField = ({
  children,
  className,
}: PropsWithChildren<InputFieldType>): JSX.Element => {
  return (
    <div className={`${classes['input-field']} ${classes[className] || ''}`}>
      {children}
    </div>
  );
};

export default InputField;
