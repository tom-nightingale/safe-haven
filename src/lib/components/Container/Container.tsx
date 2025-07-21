import React from "react";

const Container = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div className={`mx-auto max-w-(--breakpoint-3xl) px-4 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
