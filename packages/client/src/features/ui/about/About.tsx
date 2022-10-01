import { cmsUrlFor } from "@app/cms";
import { useAppSelector } from "@app/store/store-hooks";
import { profileAboutSelector } from "@features/profile/profile-state";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const about = useAppSelector(profileAboutSelector);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="mx-auto flex h-screen max-w-7xl flex-col 
      items-center justify-evenly px-6"
    >
      <div
        className="flex h-[80vh] flex-col items-center justify-evenly
        sm:h-[85vh]"
      >
        <h3
          className="mb-10 text-2xl uppercase tracking-[20px] text-gray-500
          md:mb-0"
        >
          About
        </h3>
        <div
          className="flex flex-col items-center space-y-10 
          sm:justify-evenly md:flex-row"
        >
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-56 w-56 flex-shrink-0 
            md:h-96 md:w-[300px] xl:h-[600px] 
            xl:w-[500px]"
          >
            <Image
              src={about ? cmsUrlFor(about.image).auto("format").url() : ""}
              layout="fill"
              objectFit="contain"
              alt="about"
              className="rounded-full md:rounded-lg"
            />
          </motion.div>
          <p
            className="h-[300px] max-h-[600px] max-w-xl overflow-y-scroll
            whitespace-pre-line px-5 text-justify text-sm 
            scrollbar-thin scrollbar-track-white md:h-auto
            md:px-10 md:text-base"
          >
            {about?.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
