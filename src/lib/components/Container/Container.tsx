import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-(--breakpoint-5xl) px-4">
      {children}
    </div>
  );
};

export default Container;
