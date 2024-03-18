import AppHeader from './AppHeader';
import TabsLayout from './TabsLayout';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8">
      <AppHeader />
      <TabsLayout>
        <main className="text-white">{children}</main>
      </TabsLayout>
    </div>
  );
};

export default AppLayout;
