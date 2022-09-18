import avatar from "@image/avatar.jpg";
import BackgroundCircles from "@ui/background/BackgroundCircles";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BannerLink from "./BannerLink";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "I'm Martin Velkov",
      "Software-Developer.tsx",
      "<LovesToCodeInReact />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="flex h-screen flex-col items-center justify-center
      space-y-8 overflow-hidden text-center"
    >
      <BackgroundCircles />
      <div className="relative mx-auto h-32 w-32">
        <Image
          className="rounded-full"
          src={avatar}
          layout="fill"
          objectFit="cover"
          alt="avatar"
        />
      </div>
      <div className="z-20">
        <h2
          className="space-y-2 pb-2 text-xs uppercase 
          leading-8 tracking-[1rem] text-gray-500 sm:text-sm"
        >
          Software Developer
        </h2>
        <h1 className="px-10 text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          <span>{text}</span>
          <Cursor cursorColor="#A855F7" />
        </h1>
        <div className="pt-5">
          <BannerLink title="About" href="#about" />
          <BannerLink title="Experience" href="#experience" />
          <BannerLink title="Skills" href="#skills" />
          <BannerLink title="Projects" href="#projects" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
