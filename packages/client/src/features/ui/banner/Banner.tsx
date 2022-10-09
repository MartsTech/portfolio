import { useAppSelector } from "@app/store/store-hooks";
import {
  profileDescriptionSelector,
  profileImageUrlSelector,
  profilePositionSelector,
} from "@features/profile/profile-state";
import { useTypewriter } from "@features/typewriter/typewriter-hooks";
import TypewriterCursor from "@features/typewriter/TypewriterCursor";
import BackgroundCircles from "@features/ui/background/BackgroundCircles";
import Image from "next/image";
import BannerLink from "./BannerLink";

const Banner = () => {
  const description = useAppSelector(profileDescriptionSelector);
  const position = useAppSelector(profilePositionSelector);
  const imageUrl = useAppSelector(profileImageUrlSelector);

  const [text] = useTypewriter({
    words: description || [],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="flex h-screen flex-col items-center 
      justify-center space-y-8 overflow-hidden text-center"
    >
      <BackgroundCircles />
      <div className="relative mx-auto h-32 w-32">
        <Image
          className="rounded-full"
          src={imageUrl ?? ""}
          layout="fill"
          objectFit="cover"
          alt="avatar"
        />
      </div>
      <div className="z-20">
        <h2
          className="space-y-2 pb-2 text-center text-xs 
          uppercase leading-8 tracking-widest text-gray-500
          sm:text-sm sm:tracking-[1rem]"
        >
          {position?.title}
        </h2>
        <h1
          className="text-xl font-semibold sm:px-10 sm:text-4xl 
          md:text-5xl lg:text-6xl"
        >
          <span>{text}</span>
          <TypewriterCursor cursorColor="#A855F7" />
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
