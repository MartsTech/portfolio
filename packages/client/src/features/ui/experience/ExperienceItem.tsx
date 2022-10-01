import { cmsUrlFor } from "@app/cms";
import type { ExperienceModel } from "@features/profile/profile-types";
import { motion } from "framer-motion";
import moment from "moment";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  experience: ExperienceModel;
}

const ExperienceItem: FC<Props> = ({ experience }) => {
  return (
    <article
      className="mx-auto flex w-[350px] flex-shrink-0 
      cursor-pointer snap-center flex-col items-center space-y-7
      rounded-lg bg-accent p-4 hover:opacity-90 sm:w-[400px] 
      sm:p-9 md:w-[500px] xl:w-[600px]"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="sm:h-30 sm:w-30 relative h-20 w-20 flex-shrink-0 md:h-24 md:w-24 xl:h-[150px] xl:w-[150px]"
      >
        <Image
          className="absolute rounded-full object-cover object-center"
          src={cmsUrlFor(experience.company.image).url()}
          layout="fill"
          objectFit="cover"
          alt={experience.company.name}
        />
      </motion.div>

      <div className="flex w-full flex-col ">
        <h4 className="text-xl font-light sm:text-2xl md:text-3xl lg:text-4xl">
          {experience.position.title}
        </h4>

        <p className="my-2 text-lg font-bold md:text-xl lg:text-2xl">
          {experience.company.name} ·{" "}
          {experience.position.type.charAt(0).toUpperCase() +
            experience.position.type.slice(1)}
        </p>

        <div className="my-2 flex space-x-2 overflow-hidden">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="relative h-8 w-8 sm:h-10 sm:w-10"
            >
              <Image
                className="absolute"
                src={cmsUrlFor(technology.image).url()}
                layout="fill"
                objectFit="contain"
                alt={technology.name}
              />
            </div>
          ))}
        </div>

        <p className="py-2 text-sm uppercase text-gray-300 sm:py-5 sm:text-base">
          {moment(experience.started).format("LL")} -{" "}
          {experience.ended ? moment(experience.ended).format("LL") : "Present"}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-sm md:text-base">
          {experience.description.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceItem;
