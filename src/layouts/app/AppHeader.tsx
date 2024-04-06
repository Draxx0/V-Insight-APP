import Separator from '../../components/common/Separator';
import Avatar from '../../components/containers/Avatar';
import ReloadData from '../../components/containers/UpdataData';
import { FALLBACK_CARD } from '../../constants';
import { FALLBACK_PLAYER } from "../../constants/ui/fallbacks.constants";
import { useAccountStore } from '../../store/account.store';

const AppHeader = () => {
  const { account } = useAccountStore();
  return (
    <header className="h-[50vh] flex gap-8 text-white">
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
              <p className="text-3xl">{(account && account.account_username) || FALLBACK_PLAYER.account_name}</p>
              <p className="text-neutral-500 text-2xl">{(account && account.account_tag) || FALLBACK_PLAYER.account_tag}</p>
            </div>

            <div className="flex items-center gap-3">
              <ReloadData />
              <Avatar />
            </div>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold">1.29</p>
              <p className="text-xl text-neutral-500 font-semibold">KDR</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">246</p>
              <p className="text-xl text-neutral-500 font-semibold">ASC</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">19.2%</p>
              <p className="text-xl text-neutral-500 font-semibold">HS%</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">179.4</p>
              <p className="text-xl text-neutral-500 font-semibold">ADR</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">76.7</p>
              <p className="text-xl text-neutral-500 font-semibold">ECON</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold">+35.5</p>
              <p className="text-xl text-neutral-500 font-semibold">DMG</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center max-w-[50%] justify-between">
            <div className="space-y-6">
              <p className="uppercase text-neutral-500">Current rank</p>

              <div className="flex items-center gap-3">
                <img
                  src="https://theglobalgaming.com/assets/images/article/_webp/62dde3861ae3452c2f805e32_Ascendant_2_Rank.webp"
                  alt=""
                  className="w-16 h-16"
                />
                <p className="font-bold text-2xl">Ascendant 2</p>
              </div>
            </div>
            <Separator type="vertical" className="h-[150px]" />
            <div className="space-y-6">
              <p className="uppercase text-neutral-500">Highest rank</p>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn3.emoji.gg/emojis/1775-valorant-immortal-2.png"
                  alt=""
                  className="w-16 h-16"
                />
                <div className="space-y-1">
                  <p className="font-bold text-2xl">Immortal 3</p>
                  <p className="text-neutral-500">Episode 3, Act 2</p>
                </div>
              </div>
            </div>
            <Separator type="vertical" className="h-[150px]" />
          </div>
          <Separator />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
