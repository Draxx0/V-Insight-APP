import Button from '../../components/common/ButtonLink';
import AuthLayout from '../../layouts/auth/AuthLayout';

const AuthPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center h-full gap-24">
        <div className="text-center space-y-3">
          <p className="text-neutral-300 text-2xl font-semibold">Welcome to</p>
          <div>
            <h1 className="uppercase text-ice-cold font-bold text-4xl">
              V-INSIGHT
            </h1>
            <p className="uppercase text-white font-bold text-4xl leading-7">
              Statscenter
            </p>
          </div>
        </div>

        <div className="flex gap-12 text-neutral-300">
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-xl">
              <span className="text-ice-cold">I have</span> an account
            </p>

            <p>Log in to my account and start tracking.</p>

            <Button url="/auth/signin">Use existing account</Button>
          </div>

          <span className="w-[0.1px] bg-gray-200 h-full"></span>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-xl">
              <span className="text-ice-cold">I don't have</span> an account
            </p>

            <p>Create an account and ...</p>

            <Button url="/auth/signup">Create new account</Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
