import { RotateCw } from 'lucide-react';
import { useAccountStore } from '../../store/account.store';
import { FALLBACK_CARD } from '../../constants/ui/fallbacks.constants';
import Separator from '../../components/common/Separator';

const AppHeader = () => {
  const { account } = useAccountStore();
  return (
    <header className="h-[40vh] flex gap-8 text-white">
      <div className="relative overflow-hidden">
        <img
          src={(account && account.account_card_large) || FALLBACK_CARD.LARGE}
          alt=""
          className="rounded-t-lg"
        />
        <div className="absolute bottom-0 inset-0 z-10 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-end gap-4">
              <p className="text-3xl">Kowalskitkat</p>
              <p className="text-neutral-500 text-2xl">#4005</p>
            </div>

            <div className="bg-ice-cold/10 py-2 px-4 flex items-center hover:bg-ice-cold/30 transition-all duration-300 ease-in-out text-ice-cold cursor-pointer group gap-2 rounded-full">
              <RotateCw size={14} />
              <p className="uppercase font-bold tracking-widest text-sm">
                Update
              </p>
            </div>
          </div>
          <Separator />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
