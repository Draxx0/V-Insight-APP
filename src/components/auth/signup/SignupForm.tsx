import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../common/Button';
import { SignupAuthFormData } from '../../../types/auth';
import { SignupAuthSchema } from '../../../schemas/auth.schemas';
import SignupFormField from './SignupFormField';
import useSignup from '../../../hooks/auth/useSignup';
import ErrorMessage from '../../common/ErrorMessage';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupAuthFormData>({
    resolver: zodResolver(SignupAuthSchema),
  });

  const { onSubmit, isLoading, isError, error } = useSignup();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto h-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 text-white">
        <h1 className="text-3xl font-bold mb-4 relative before:absolute before:w-2/3 before:h-[2px] before:left-1/2 before:-bottom-2 before:bg-ice-cold before:-translate-x-1/2">
          Track your Valorant Stats !
        </h1>

        <SignupFormField
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          error={errors.username}
        />

        <SignupFormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <SignupFormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />

        <SignupFormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />

        {isError && <ErrorMessage error={error} />}

        <Button className="w-full" type="submit" isLoading={isLoading}>
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
