import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
const Separator = ({
  type = 'horizontal',
  className,
}: {
  type?: 'horizontal' | 'vertical';
  className?: string;
}) => {
  const classes = clsx(
    {
      'h-px w-full': type === 'horizontal',
      'h-full w-px': type === 'vertical',
    },
    'bg-neutral-700 rounded-md'
  );
  return <div className={twMerge(classes, className)}></div>;
};

export default Separator;
