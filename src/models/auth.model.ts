import { AuthError } from './error.model';

export interface SignupState {
  email?: string;
  password?: string;
  confirmPassword?: string;
  error: AuthError;
}
