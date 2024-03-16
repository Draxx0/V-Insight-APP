import SigninForm from '../../components/auth/signin/SigninForm';

const SigninPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <SigninForm />
      </div>
      <div className="w-1/2 relative">
        <div className="w-full h-full bg-cover bg-no-repeat bg-top bg-[url('/assets/images/auth_page_bg.jpg')]"></div>
        <div className="absolute inset-0 w-full h-full bg-auth-gradient opacity-75"></div>
      </div>
    </div>
  );
};

export default SigninPage;
