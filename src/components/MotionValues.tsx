import { useMotionValue, motion, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const MotionValues = () => {
  const x = useMotionValue(1);
  const input = [-200, 0, 200];
  const output = [1, 0.3, 1];
  const colorOutput = ["#f00", "#fff", "#0f0"];
  const opacity = useTransform(x, input, output);
  const color = useTransform(x, input, colorOutput);

  useEffect(() => {}, []);

  return (
    <>
      <motion.div drag="x" style={{ x, color, background: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        itaque.
      </motion.div>
      <button onClick={() => x.set(200)}>set 10</button>
    </>
  );
};

export default MotionValues;
