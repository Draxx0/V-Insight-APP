import clsx from 'clsx';

import { FALLBACK_CARD } from '../../constants';
import { useAccountStore } from '../../store/account.store';
import CustomTooltip from '../common/CustomTooltip';
import { ChevronDown } from 'lucide-react';

const Avatar = () => {
  const { account } = useAccountStore();

  const classes = clsx(
    {
      'cursor-not-allowed brightness-50': !account,
      'cursor-pointer hover:bg-ice-cold/30': account,
    },
    'rounded-full bg-ice-cold/10 py-2 px-4 flex items-center transition-all duration-300 ease-in-out text-ice-cold group gap-2 rounded-full'
  );

  return (
    <>
      <button
        disabled={account ? false : true}
        className={classes}
        id="no-account-data-tooltip"
      >
        <div className="flex items-center gap-1">
          <img
            src={account?.account_card_small ?? FALLBACK_CARD.SMALL}
            alt=""
            className="w-6"
          />
          <ChevronDown size={22} />
        </div>
      </button>

      {!account ? (
        <CustomTooltip
          anchorSelect="#no-account-data-tooltip"
          place="left"
          style="Warning"
        >
          An error occurred while fetching your account data. Please try again
          later.
        </CustomTooltip>
      ) : null}
    </>
  );
};

export default Avatar;
