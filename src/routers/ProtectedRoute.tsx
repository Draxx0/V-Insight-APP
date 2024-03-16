import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { PropsWithChildren } from 'react';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
