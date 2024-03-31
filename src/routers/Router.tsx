import { Navigate, Route, Routes } from 'react-router-dom';
import SignupPage from '../pages/auth/Signup';
import SigninPage from '../pages/auth/Signin';
import MatchesPage from '../pages/Matches';
import AuthPage from '../pages/auth/AuthPage';
import ProtectedRoute from './ProtectedRoute';
import StatsPage from '../pages/Stats';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MatchesPage />
          </ProtectedRoute>
        }
      />

      <Route path="/stats" element={<StatsPage />} />

      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/signin" element={<SigninPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
