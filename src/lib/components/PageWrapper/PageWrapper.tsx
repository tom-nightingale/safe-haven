"use client";

// import { HTMLMotionProps, motion } from "framer-motion";
import { HTMLMotionProps, motion } from "motion/react";

const PageWrapper = (props: HTMLMotionProps<"div">) => {
  return (
    <div className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        {...props}
      />
    </div>
  );
};

export default PageWrapper;
