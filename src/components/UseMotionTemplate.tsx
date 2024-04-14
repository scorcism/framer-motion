import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue
} from "framer-motion";
import { useEffect } from "react";

const UseMotionTemplate = () => {
  // Combine multiple motion values into a new one via string template

  const x = useMotionValue(0);

  useEffect(() => {
    animate(x, [1, 10, 30, 80, 100, 150, 270, 360], {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
    });
  }, []);

  const rotate = useMotionTemplate`rotate(-${x}deg)`;

  return (
    <motion.div style={{ transform: rotate }}>UseMotionTemplate</motion.div>
  );
};

export default UseMotionTemplate;
