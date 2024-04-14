import { useTime, useTransform, motion } from "framer-motion";
import React from "react";

const UseTime = () => {
  // A motion value that updates every animation frame with the duration, in ms, since it was created
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="example-container">
      <motion.div style={{ rotate }} />
    </div>
  );
};

export default UseTime;
