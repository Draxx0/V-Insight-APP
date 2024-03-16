import { FieldError, UseFormRegister } from 'react-hook-form';

export interface SignupAuthFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupAuthFormFieldProps {
  type: string;
  placeholder: string;
  name: SignupAuthValidFieldNames;
  register: UseFormRegister<SignupAuthFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
}

export type SignupAuthValidFieldNames =
  | 'username'
  | 'email'
  | 'password'
  | 'confirmPassword';

export interface SigninAuthFormData
  extends Pick<SignupAuthFormData, 'email' | 'password'> {}

export interface SigninAuthFormFieldProps
  extends Omit<SignupAuthFormFieldProps, 'name' | 'register'> {
  name: SigninAuthValidFieldNames;
  register: UseFormRegister<SigninAuthFormData>;
}

export type SigninAuthValidFieldNames = 'email' | 'password';
