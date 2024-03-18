import { PropsWithChildren } from 'react';
import { TABS } from '../../constants/ui/tabs/tabs';
import { NavLink } from 'react-router-dom';

const TabsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex gap-4 mt-12 text-white">
      {Object.values(TABS).map((tab, index) => (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? 'font-bold text-lg'
              : isActive
              ? 'font-bold text-lg text-ice-cold relative before:absolute before:left-0 before:-bottom-2 before:w-full before:bg-ice-cold before:h-[0.15rem] before:rounded-full'
              : ''
          }
          key={index}
          to={`${tab.path}`}
          end
        >
          {tab.text}
        </NavLink>
      ))}
      {children}
    </div>
  );
};

export default TabsLayout;
