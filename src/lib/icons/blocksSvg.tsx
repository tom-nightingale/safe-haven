"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  stroke?: string;
  classes?: string;
};

const BlocksSvg = ({ stroke = "#D6CFC7", classes }: Props) => {
  const ref = useRef<SVGSVGElement>(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(ref.current, {
      x: () => gsap.utils.random(-2, 2),
      y: () => gsap.utils.random(-3, 3),
      rotate: () => gsap.utils.random(-4, 4),
      duration: 1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
  });

  return (
    <svg
      width="134"
      height="133"
      viewBox="0 0 134 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      ref={ref}
    >
      <g clipPath="url(#clip0_738_889)">
        <path
          d="M116.274 49.9172L94.4271 27.8862C92.6571 26.1012 89.7752 26.0892 87.9902 27.8592L65.97 49.6958C64.185 51.4658 64.173 54.3477 65.943 56.1327L87.7902 78.1637C89.5603 79.9486 92.4422 79.9607 94.2272 78.1907L116.247 56.3541C118.032 54.584 118.044 51.7021 116.274 49.9172Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M99.7137 44.4779L95.2584 53.1354L102.11 60.0518L92.5039 58.4828L88.0486 67.1403L86.5596 57.521L76.9539 55.952L85.6451 51.5796L84.1637 41.9472L91.0149 48.8635L99.7137 44.4779Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.5249 57.8242L26.6701 49.4324C24.2501 48.7522 21.7369 50.1625 21.0567 52.5826L12.6608 82.4519C11.9805 84.8719 13.3909 87.3851 15.8109 88.0654L45.6656 96.4571C48.0856 97.1374 50.5989 95.727 51.2791 93.307L59.675 63.4377C60.3552 61.0177 58.9449 58.5044 56.5249 57.8242Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.9808 75.4038C43.6156 80.2568 38.5783 83.0948 33.7122 81.722C28.8593 80.3567 26.0213 75.3194 27.3941 70.4533C28.7594 65.6004 33.7966 62.7624 38.6627 64.1352C43.5157 65.5005 46.3537 70.5378 44.9808 75.4038Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100.61 93.5407L73.7526 78.0348C71.5756 76.7779 68.7919 77.5238 67.535 79.7009L52.0291 106.558C50.7722 108.735 51.5181 111.519 53.6951 112.775L80.5521 128.281C82.7291 129.538 85.5128 128.792 86.7697 126.615L102.276 99.7583C103.532 97.5813 102.787 94.7976 100.61 93.5407Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M81.9011 94.9328L62.8829 105.904L81.8956 116.881L81.9011 94.9328Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_889">
          <rect
            width="97.1012"
            height="97.1012"
            fill="white"
            transform="translate(49.5) rotate(30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BlocksSvg;
