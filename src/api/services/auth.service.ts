import { AuthResponse } from '../../types/common/api';
import { createRequestOptions } from '../../utils/request.options';

const Signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/signin`,
    createRequestOptions({ email, password })
  );

  if (!response.ok && response.status === 404) {
    throw new Error('User not found');
  }

  return response.json();
};

const Signup = async ({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}): Promise<AuthResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/signup`,
    createRequestOptions({ email, password, username })
  );

  if (!response.ok) {
    throw new Error('Error while signing up');
  }

  return response.json();
};

const POST = {
  Signin,
  Signup,
};

export const AuthService = {
  POST,
};
