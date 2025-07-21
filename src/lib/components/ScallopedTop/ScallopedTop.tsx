import React from "react";

type Props = {
  children: React.ReactNode;
};
const ScallopedTop = ({ children }: Props) => {
  return (
    <div className="scalloped-top relative mt-8">
      <div className="from-taupe to-cream relative bg-gradient-to-b py-10 xl:py-15">
        {children}
      </div>
    </div>
  );
};

export default ScallopedTop;
