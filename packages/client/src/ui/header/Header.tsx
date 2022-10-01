import { useAppSelector } from "@app/store/store-hooks";
import {
  profileEmailSelector,
  profileSocialsCollectionSelector,
} from "@features/profile/profile-state";
import SocialIcon from "@ui/social/SocialIcon";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const socials = useAppSelector(profileSocialsCollectionSelector);
  const email = useAppSelector(profileEmailSelector);

  return (
    <header
      className="xl:items sticky top-0 z-20 mx-auto mt-auto
      flex max-w-7xl items-start justify-between 
      overflow-hidden p-8"
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-6"
      >
        {socials?.map((social) => (
          <SocialIcon key={social._id} type={social.type} url={social.url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href={`mailto:${email}`}>
          <div className="flex cursor-pointer items-center space-x-4">
            <SocialIcon type="gmail" />
            <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
              Get In Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
