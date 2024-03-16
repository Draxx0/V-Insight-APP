import { useMutation } from 'react-query';
import { SignupAuthFormData } from '../../types/auth';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../api/services/auth.service';
import { useAuthStore } from '../../store/auth.store';
import { useEffect } from 'react';

const useSignup = () => {
  const navigate = useNavigate();
  const { setUser, setAccessToken } = useAuthStore();

  const {
    mutate,
    isLoading,
    isError,
    error,
    data: mutationData,
  } = useMutation({
    mutationFn: async (data: SignupAuthFormData) => {
      return await AuthService.POST.Signup({
        email: data.email,
        password: data.password,
        username: data.username,
      });
    },
  });

  const onSubmit = (data: SignupAuthFormData) => {
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

export default useSignup;
