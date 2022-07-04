import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="relative flex items-center justify-center w-20 h-20 bg-primary-50 rounded-full mt-[350px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute w-20 h-20 bg-neutral-white border-t-[0.80rem] border-[0.80rem] border-primary-20 rounded-full border-box border-t-primary-50"
      ></motion.div>
    </div>
  );
};

export default Loading;
