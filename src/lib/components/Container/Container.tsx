import React from "react";

const Container = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div className={`max-w-(--breakpoint-5xl) px-4 ${classes}`}>{children}</div>
  );
};

export default Container;
