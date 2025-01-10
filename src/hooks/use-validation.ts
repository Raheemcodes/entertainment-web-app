import { useEffect, useRef, useState } from 'react';

const useValidation = (className?: string, dependency?: string) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  useEffect(() => {
    const input = inputRef.current!;
    const validate = () => {
      setInputValue(input.value);
      setIsValid(input.checkValidity());
    };

    const inputHandler: EventListener = validate;
    const blurHandler: EventListener = () => setIsDirty(true);

    input.addEventListener('input', inputHandler);
    input.addEventListener('change', inputHandler);
    input.addEventListener('blur', blurHandler);

    if (dependency) validate();

    () => {
      input.removeEventListener('input', inputHandler);
      input.removeEventListener('change', inputHandler);
      input.removeEventListener('blur', blurHandler);
    };
  }, [dependency]);

  return {
    ref: inputRef,
    value: inputValue,
    isValid,
    isDirty,
    className: !isValid && isDirty ? className : '',
  };
};

export default useValidation;
