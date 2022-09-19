import avatar from "@image/avatar.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl 
      flex-col items-center justify-evenly px-10 text-center
      md:flex-row md:text-left"
    >
      <h3
        className="absolute top-24 text-2xl uppercase tracking-[20px]
        text-gray-500"
      >
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="md:h-95 relative -mb-20 h-56 w-56 flex-shrink-0
        md:mb-0 md:w-64 xl:h-[600px] xl:w-[500px]"
      >
        <Image
          src={avatar}
          layout="fill"
          objectFit="cover"
          alt="about"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">My Background</h4>
        <p className="text-justify text-base">
          Hi there! I am Martin! I am currently 18 years old and I have been
          coding for 3 years now. I have cloned many of the most popular web
          applications like Gmail, LinkedIn, Netflix, WhatsApp, Twitch, Imessage
          and working on many more. I am currently pursuing my dream of becomimg
          a developer and I am trying my best to become better with each day.
          Programming is the thing I am the most passionate about and I plan to
          make a name for myself with it.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
