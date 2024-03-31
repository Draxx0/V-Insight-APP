import { RotateCw } from 'lucide-react';
import { useAccountStore } from '../../store/account.store';
import clsx from 'clsx';
import CustomTooltip from '../common/CustomTooltip';

const ReloadData = () => {
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
        className={classes}
        id="no-account-data-tooltip"
        disabled={account ? false : true}
      >
        <RotateCw size={14} />
        <p className="uppercase font-bold tracking-widest text-sm">Update</p>
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

export default ReloadData;
