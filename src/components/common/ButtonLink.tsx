import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  url: string;
};

const ButtonLink = ({ children, url }: PropsWithChildren<Props>) => {
  return (
    <Link
      to={url}
      className=" rounded-full px-4 py-2 text-black border-2 hover:opacity-80 hover:border-ice-cold transition-all ease-in-out duration-300 bg-neutral-300 w-fit"
    >
      <button className="uppercase font-bold">{children}</button>
    </Link>
  );
};

export default ButtonLink;
