import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import SpinLoader from './SpinLoader';

type Props = {
  type: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
};

const Button = ({
  type = 'button',
  onClick,
  children,
  isLoading,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        'uppercase font-bold relative rounded-full px-4 py-2 text-black border-2 hover:opacity-80 hover:border-ice-cold transition-all ease-in-out duration-300 bg-neutral-300 w-fit',
        className
      )}
    >
      {isLoading ? <SpinLoader /> : children}
    </button>
  );
};

export default Button;
