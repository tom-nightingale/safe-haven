import { useRef, useState, type ReactElement } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FancyLink from "@/components/FancyLink/FancyLink";
import { useGlobalContext } from "@/context/GlobalContext";
import Button from "@/components/Button/Button";
import Typography, { TypeVariant } from "@/components/Typography/Typography";
import { FaPhone } from "react-icons/fa";

type Props = {
  buttonLabel?: string;
  buttonIcon?: ReactElement;
  typeClasses?: string;
  iconClasses?: string;
  classes?: string;
};

const NurserySelectButton = ({
  buttonLabel,
  buttonIcon,
  typeClasses,
  iconClasses,
  classes,
}: Props) => {
  const { nurseries } = useGlobalContext();
  const [isViewingOptionsOpen, setIsViewingOptionsOpen] = useState(false);

  gsap.registerPlugin(useGSAP);
  const subnav = useRef(null);

  useGSAP(
    () => {
      if (isViewingOptionsOpen && subnav.current) {
        gsap.fromTo(
          subnav.current,
          { opacity: 0, yPercent: 10 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
            ease: "back.out(2)",
          },
        );
      }
    },
    { dependencies: [isViewingOptionsOpen], scope: subnav },
  );

  return (
    <div className="relative w-max">
      <Button
        classes={`button-primary button-peach inline-block ${classes}`}
        label={buttonLabel ?? "Book A Viewing"}
        iconLeft={buttonIcon ?? undefined}
        onClick={() => setIsViewingOptionsOpen(!isViewingOptionsOpen)}
        typeClasses={typeClasses ?? ""}
        iconClasses={iconClasses ?? ""}
      />

      {nurseries && isViewingOptionsOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 before:absolute before:top-0 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:bg-white before:content-['']"
          ref={subnav}
        >
          <div className="relative mt-2 flex w-max flex-col gap-3 rounded-3xl bg-white p-4 shadow-lg">
            {nurseries &&
              nurseries.map(nursery => {
                return (
                  <div
                    key={nursery?.slug?.current}
                    className="flex flex-col items-center gap-1"
                  >
                    <FancyLink
                      url={`/our-nurseries/${nursery?.slug?.current}#locationDetails`}
                    >
                      <Typography
                        variant={TypeVariant.Button2}
                        classes="hover:text-peach"
                        bold
                      >
                        {nursery?.location}
                      </Typography>
                    </FancyLink>

                    <a href={`tel:${nursery?.phoneNumber}`}>
                      <Typography
                        variant={TypeVariant.Button2}
                        classes="hover:text-peach flex items-center justify-center gap-1"
                      >
                        <span className="relative mt-px inline-block rotate-90 transform">
                          <FaPhone size={12} />
                        </span>
                        {nursery?.phoneNumber}
                      </Typography>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NurserySelectButton;
