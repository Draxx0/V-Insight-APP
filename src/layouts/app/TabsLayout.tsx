import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { TABS } from '../../constants';

const TabsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <nav className="flex gap-4 my-8 text-white">
        {Object.values(TABS).map((tab, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-lg text-ice-cold relative before:absolute before:left-0 before:-bottom-2 before:w-full before:bg-ice-cold before:h-[0.15rem] before:rounded-full'
                : 'hover:text-ice-cold font-bold transition-all ease-in-out duration-300 text-lg '
            }
            key={index}
            to={`${tab.path}`}
            end
          >
            {tab.text}
          </NavLink>
        ))}
      </nav>
      {children}
    </>
  );
};

export default TabsLayout;
