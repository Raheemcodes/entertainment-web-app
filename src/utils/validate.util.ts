import validator from 'validator';

export const validateEmail = (email: string) => {
  return validator.isEmail(email);
};

const validatePassword = (p: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+#^()_\-=[\]{}|;:',.<>/`~])(?!.*(.)\1{2})[A-Za-z\d@$!%*?&+#^()_\-=[\]{}|;:',.<>/`~]{8,}$/.test(
    p
  );
export const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
