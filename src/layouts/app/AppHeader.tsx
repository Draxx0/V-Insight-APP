import { RotateCw } from 'lucide-react';
import { useAccountStore } from '../../store/account.store';
import { FALLBACK_CARD } from '../../constants/ui/fallbacks.constants';

const AppHeader = () => {
  const { account } = useAccountStore();
  return (
    <header className="h-[40vh] flex gap-4 text-white">
      <div>
        <img
          src={(account && account.account_card_large) || FALLBACK_CARD.LARGE}
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="text-3xl">Jimmy</p>
            <p className="text-neutral-500 text-xl">#AIMLAB</p>
          </div>

          <div className="bg-ice-cold/10 py-2 px-4 flex items-center hover:bg-ice-cold/30 transition-all duration-300 ease-in-out text-ice-cold cursor-pointer group gap-2 rounded-full">
            <RotateCw size={14} />
            <p className="uppercase font-bold tracking-widest text-sm">
              Update
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
