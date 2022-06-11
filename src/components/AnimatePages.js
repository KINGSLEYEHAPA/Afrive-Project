import { motion } from "framer-motion";

const AnimatePages = ({ children }) => {
  const animation = {
    intial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatePages;
