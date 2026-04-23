import { motion } from "framer-motion";

const FadeDown = ({
  children,
  delay = 0,
  duration = 0.4,
  y = -20,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
