import AppHeader from './AppHeader';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8">
      <AppHeader />
      <main className="text-white">{children}</main>
    </div>
  );
};

export default AppLayout;
