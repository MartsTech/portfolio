import socialConfig from "@features/social/social-config";
import SocialIcon from "@ui/social/SocialIcon";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-20 mx-auto flex max-w-7xl
      items-start justify-between overflow-hidden p-5 
      xl:items-center"
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-4"
      >
        <SocialIcon type="github" url={socialConfig.GITHUB_URL} />
        <SocialIcon type="linkedin" url={socialConfig.LINKEDIN_URL} />
        <SocialIcon type="instagram" url={socialConfig.INSTAGRAM_URL} />
        <SocialIcon type="facebook" url={socialConfig.FACEBOOK_URL} />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href={`mailto:${socialConfig.EMAIL_ADDRESS}`}>
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
