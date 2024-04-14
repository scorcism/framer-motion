import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

const UseMotionValueEvent = () => {
  // Subscribe to motion value events from a React component.
  const x = useMotionValue(0);

  // Available events are:
  // - change
  // - animationStart
  // - animationComplete
  // - animationCancel

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started on x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <motion.div drag='x' style={{ x }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
      quibusdam!
    </motion.div>
  );
};

export default UseMotionValueEvent;
