import { z, ZodType } from 'zod';
import { SigninAuthFormData, SignupAuthFormData } from '../types/auth';

export const SignupAuthSchema: ZodType<SignupAuthFormData> = z
  .object({
    username: z.string().min(3, {
      message:
        'Username is too short, it must be composed of at least 3 characters',
    }),
    email: z.string().email(),
    password: z.string().min(8, {
      message:
        'Password is too short, it must be composed of at least 8 characters',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const SigninAuthSchema: ZodType<SigninAuthFormData> = z.object({
  email: z.string().email(),
  password: z.string(),
});
