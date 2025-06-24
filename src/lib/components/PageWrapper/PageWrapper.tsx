"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { useRef } from "react";

let hasLoaded = false;

const PageWrapper = (props: HTMLMotionProps<"div">) => {
  const isFirstLoad = useRef(!hasLoaded);
  if (!hasLoaded) hasLoaded = true;

  return (
    <div className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isFirstLoad.current ? 0 : 0.7 }}
        {...props}
      />
    </div>
  );
};

export default PageWrapper;
