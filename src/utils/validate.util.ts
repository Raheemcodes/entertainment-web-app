import validator from 'validator';

export const validateEmail = (email: string) => {
  return validator.isEmail(email);
};

export const validatePassword = (password: string) => {
  return validator.isStrongPassword(password);
};
export const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
