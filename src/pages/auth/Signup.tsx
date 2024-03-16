import SignupForm from '../../components/auth/signup/SignupForm';

const SignupPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <SignupForm />
      </div>
      <div className="w-1/2 relative">
        <div className="w-full h-full bg-cover bg-no-repeat bg-top bg-[url('/assets/images/auth_page_bg.jpg')]"></div>
        <div className="absolute inset-0 w-full h-full bg-auth-gradient opacity-75"></div>
      </div>
    </div>
  );
};

export default SignupPage;
