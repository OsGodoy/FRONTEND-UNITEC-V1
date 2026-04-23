import { motion } from "framer-motion";

const FadeLeft = ({
  children,
  delay = 0,
  duration = 0.4,
  x = 20,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
