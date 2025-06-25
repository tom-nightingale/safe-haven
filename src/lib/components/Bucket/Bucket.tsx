"use client";

import Button from "@/components/Button/Button";

type Props = {
  imgSrc: string;
  title: string;
  subtitle: string;
  containerClass?: string;
  buttonText?: string;
  buttonStyle?: "full" | "icon";
  buttonClass?: string;
};

const Bucket = ({
  imgSrc,
  title,
  subtitle,
  buttonText,
  buttonStyle = "full",
  containerClass = "bg-green",
  buttonClass = "button-outline-green text-green",
}: Props) => {
  console.log("imgSrc", imgSrc);
  console.log("buttonStyle", buttonStyle);
  return (
    <div className="relative">
      <div className="bg-green/20 pointer-events-none absolute -top-2 -left-2 z-0 h-full w-full rounded-3xl"></div>
      <div
        className={`text-dark-green relative flex flex-col overflow-hidden rounded-3xl ${containerClass}`}
      >
        <div className="aspect-[2/1.5] bg-white">img</div>

        <div className="flex flex-col justify-start gap-3 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-lg">{title}</p>
            <p className="font-serif text-xs">{subtitle}</p>
          </div>

          <div className="mr-auto rounded-full bg-white p-0.5 md:m-0">
            <Button
              classes={`button-primary button-outline text-xs ${buttonClass}`}
              outlined={true}
              label={buttonText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
