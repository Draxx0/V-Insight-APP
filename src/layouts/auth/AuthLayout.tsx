const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen bg-no-repeat bg-cover bg-center bg-[url('/assets/images/auth_bg.png')] relative">
      {children}
    </section>
  );
};

export default AuthLayout;
