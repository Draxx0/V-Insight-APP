import { Navigate, Route, Routes } from 'react-router-dom';
import CompetitivePage from '../pages/Competitive';

import AuthPage from '../pages/auth/AuthPage';
import SigninPage from '../pages/auth/Signin';
import SignupPage from '../pages/auth/Signup';
import UnratedPage from "../pages/Unrated";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <ProtectedRoute>
          <Navigate to="/unrated" />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/unrated"
        element={
          // <ProtectedRoute>
          <UnratedPage />
          // </ProtectedRoute>
        }
      />

      <Route path="/competitive" element={<CompetitivePage />} />

      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/signin" element={<SigninPage />} />
      <Route path="*" element={<Navigate to="/unrated" />} />
    </Routes>
  );
};

export default Router;
