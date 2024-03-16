import { useMutation } from 'react-query';
import { SigninAuthFormData } from '../../types/auth';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../api/services/auth.service';
import { useAuthStore } from '../../store/auth.store';
import { useEffect } from 'react';

const useSignin = () => {
  const navigate = useNavigate();
  const { setUser, setAccessToken } = useAuthStore();

  const {
    mutate,
    isLoading,
    isError,
    error,
    data: mutationData,
  } = useMutation({
    mutationFn: async (data: SigninAuthFormData) => {
      return await AuthService.POST.Signin({
        email: data.email,
        password: data.password,
      });
    },
  });

  const onSubmit = (data: SigninAuthFormData) => {
    mutate(data);
  };

  useEffect(() => {
    if (mutationData) {
      setUser(mutationData.user);
      setAccessToken(mutationData.access_token);
      navigate('/');
    }
  }, [mutationData, setUser, setAccessToken, navigate]);

  return {
    onSubmit,
    isLoading,
    isError,
    error,
  };
};

export default useSignin;
