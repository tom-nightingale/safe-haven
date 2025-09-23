"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setShowBackToTop(true);
    } else if (scrollPosition < 50) {
      return setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-3 bottom-4 z-100">
      <button
        onClick={handleScrollUp}
        className={`shadow-dark-peach/20 relative z-20 rounded-3xl bg-white p-4 shadow-xs transition-all duration-300 ${showBackToTop ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
export default BackToTop;
