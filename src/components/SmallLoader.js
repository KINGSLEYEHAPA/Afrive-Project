import { motion } from "framer-motion";

const SmallLoader = ({ loaderColor }) => {
  return (
    <div
      className={
        loaderColor === "secondary"
          ? "relative flex items-center justify-center w-4 h-4 bg-primary-50 rounded-full mt-[200px]"
          : "relative flex items-center justify-center w-4 h-4 bg-neutral-white rounded-full mt-[200px]"
      }
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={
          loaderColor === "secondary"
            ? "absolute w-4 h-4 bg-neutral-white border-t-[0.20rem] border-[0.20rem] border-primary-20 rounded-full border-box border-t-primary-50"
            : "absolute w-4 h-4 bg-primary-50 border-t-[0.20rem] border-[0.20rem] border-primary-10 rounded-full border-box border-t-primary-50"
        }
      ></motion.div>
    </div>
  );
};

export default SmallLoader;
