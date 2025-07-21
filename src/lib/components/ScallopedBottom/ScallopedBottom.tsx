import React from "react";

type Props = {
  children: React.ReactNode;
};
const ScallopedTop = ({ children }: Props) => {
  return (
    <div className="scalloped-bottom relative mb-20">
      <div className="from-taupe to-cream relative bg-gradient-to-t py-20">
        {children}
      </div>
    </div>
  );
};

export default ScallopedTop;
