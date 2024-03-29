import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div
        className="absolute mt-52 h-[200px] w-[200px] animate-ping 
        rounded-full border border-gray-600"
      />
      <div
        className="absolute mt-52 h-[300px] w-[300px] animate-ping 
        rounded-full border border-gray-600"
      />
      <div
        className="absolute mt-52 h-[500px] w-[500px] 
        rounded-full border border-purple-500/80 opacity-20"
      />
      <div
        className="absolute mt-52 h-[600px] w-[600px] animate-pulse
        rounded-full border border-purple-500/80 opacity-20"
      />
      <div
        className="absolute mt-52 h-[750px] w-[750px]
        rounded-full border border-purple-500/80 opacity-20"
      />
    </motion.div>
  );
};

export default BackgroundCircles;
