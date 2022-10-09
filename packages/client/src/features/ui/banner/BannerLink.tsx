import Link from "next/link";
import type { FC } from "react";

interface Props {
  title: string;
  href: string;
}

const BannerLink: FC<Props> = ({ title, href }) => {
  return (
    <Link href={href}>
      <button
        className="rounded-full border border-[#242424] px-6
        py-2 text-xs uppercase tracking-widest text-gray-500
        transition-all hover:border-purple-500/40 
        hover:text-purple-500/40"
      >
        {title}
      </button>
    </Link>
  );
};

export default BannerLink;
