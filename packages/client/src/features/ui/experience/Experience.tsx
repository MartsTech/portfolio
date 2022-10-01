import { useAppSelector } from "@app/store/store-hooks";
import { profileExperienceCollectionSelector } from "@features/profile/profile-state";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = useAppSelector(profileExperienceCollectionSelector);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="mx-auto flex h-screen max-w-full flex-col 
      items-center justify-evenly overflow-hidden px-10"
    >
      <div
        className="flex h-[80vh] w-full flex-col 
        items-center justify-evenly sm:h-[85vh]"
      >
        <h3
          className="text-2xl uppercase tracking-[20px]
        text-gray-500"
        >
          Experience
        </h3>
        <div
          className="flex w-full snap-x snap-mandatory 
          space-x-5 overflow-x-scroll p-14 scrollbar
         scrollbar-track-accent"
        >
          {experiences?.map((experience) => (
            <ExperienceItem key={experience._id} experience={experience} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
