"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  stroke?: string;
  classes?: string;
};

const HorseSvg = ({ stroke = "#D6CFC7", classes }: Props) => {
  const ref = useRef<SVGSVGElement>(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    const angle = 10;
    tl.to(ref.current, {
      rotate: angle,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <svg
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      ref={ref}
    >
      <g clipPath="url(#clip0_738_899)">
        <path
          d="M87.0031 7.30129L81.9323 12.9608C77.01 12.0734 68.2938 18.1502 63.3853 29.666C63.0143 30.5488 62.676 31.3749 62.3745 32.1592C61.0466 35.6167 57.6585 36.6365 54.3056 34.625C50.8352 32.5331 49.8635 30.2193 49.8635 30.2193L55.0702 28.4085C56.7707 24.6113 58.9716 21.6073 62.9307 16.4535C77.3926 -2.37065 93.6574 10.7145 93.6574 10.7145L87.2439 16.494L97.6457 29.1196C100.043 32.2185 98.8657 36.8348 94.4517 37.6658C91.83 38.1445 89.1742 36.8255 87.5123 33.7854C87.2072 33.2436 86.366 31.1187 86.366 31.1187C86.366 31.1187 76.3323 34.3668 73.6327 27.9914"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.5462 31.0479C78.1847 40.2658 84.3015 64.9436 103.842 80.5884"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="84.619"
          cy="22.5695"
          r="1.54435"
          transform="rotate(-15 84.619 22.5695)"
          fill="#D6CFC7"
          fillOpacity="0.4"
        />
        <path
          d="M113.441 86.698C90.1763 105.307 60.1776 113.345 30.725 108.862C27.2923 108.343 25.0325 105.399 25.6807 102.507C26.3328 99.6303 29.3031 97.8272 32.3378 98.2931C58.8383 102.32 85.8387 95.0855 106.775 78.3476C109.174 76.4417 112.644 76.5032 114.648 78.6685C116.636 80.8378 116.166 84.5132 113.456 86.694L113.441 86.698Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.9834 98.7712C35.9834 98.7712 38.1176 91.5802 37.0455 82.6262C35.9733 73.6722 29.1393 72.2738 32.8819 61.598C35.7054 53.5188 43.434 51.7517 47.0387 51.3614C49.791 51.0716 52.495 50.3631 54.9038 49.0301C59.2353 46.6384 64.0256 41.9014 61.9835 32.9675"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.1149 70.8269C46.1149 70.8269 52.1468 84.4475 46.554 99.3763"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.7558 77.2054C58.3014 77.5222 70.3753 76.6373 75.6465 66.4154"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72.7595 60.4739C73.3115 60.326 78.8054 78.2637 94.8127 86.5094"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47.0388 51.3614C47.0388 51.3614 48.3715 66.8967 59.3255 62.9064C70.2796 58.916 64.1538 47.5109 60.8481 43.4083"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60.5198 62.4105L65.9786 75.1454"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.9365 57.6899C34.9365 57.6899 24.603 44.9021 17.1214 52.6626C11.9668 58.0089 19.2024 65.0236 16.3171 79.6746C16.3171 79.6746 28.9313 78.8368 24.0342 69.2129C21.5743 64.388 25.0872 55.4206 33.1834 60.8137"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_899">
          <rect
            width="98.8387"
            height="98.8387"
            fill="white"
            transform="translate(0.224121 25.5813) rotate(-15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HorseSvg;
