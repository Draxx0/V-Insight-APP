import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../common/Button';
import { SigninAuthFormData } from '../../../types/auth';
import { SigninAuthSchema } from '../../../schemas/auth.schemas';
import SigninFormField from './SigninFormField';
import useSignin from '../../../hooks/auth/useSignin';
import ErrorMessage from '../../common/ErrorMessage';
import { Link } from 'react-router-dom';

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninAuthFormData>({
    resolver: zodResolver(SigninAuthSchema),
  });

  const { onSubmit, isLoading, isError, error } = useSignin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto h-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 text-white">
        <h1 className="text-3xl font-bold mb-4 relative before:absolute before:w-2/3 before:h-[2px] before:left-1/2 before:-bottom-2 before:bg-ice-cold before:-translate-x-1/2">
          Track your Valorant Stats !
        </h1>

        <SigninFormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <SigninFormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />

        {isError && <ErrorMessage error={error} />}

        <Link
          to="/auth/forgot-password"
          className="text-center underline text-sm"
        >
          Forgot password?
        </Link>

        <Link to="/auth/signup" className="text-center underline text-sm">
          Don't have an account? Sign up
        </Link>

        <Button className="w-full" type="submit" isLoading={isLoading}>
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
