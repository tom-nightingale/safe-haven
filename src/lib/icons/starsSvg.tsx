"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  stroke?: string;
  classes?: string;
};

const StarsSvg = ({ stroke = "#D6CFC7", classes }: Props) => {
  const ref = useRef<SVGSVGElement>(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    const float = () => gsap.utils.random(-5, 5, true); // subtle offsets
    tl.to(ref.current, {
      x: float(),
      y: float(),
      duration: 2.5,
      ease: "sine.inOut",
    })
      .to(ref.current, {
        x: float(),
        y: float(),
        duration: 3,
        ease: "sine.inOut",
      })
      .to(ref.current, {
        x: float(),
        y: float(),
        duration: 2,
        ease: "sine.inOut",
      });
  });

  return (
    <svg
      ref={ref}
      width="181"
      height="181"
      viewBox="0 0 181 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M141.967 34.6982L146.797 35.5481"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M161.467 38.1281L166.307 38.9881"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M151.977 49.0781L152.837 44.2181"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M155.437 29.4681L156.297 24.5981"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M101.187 165.228L106.027 166.078"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120.697 168.668L125.537 169.518"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M111.207 179.608L112.067 174.748"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M114.667 159.998L115.517 155.138"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.5667 49.4382L30.8867 50.0782"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7467 52.0482L16.0767 52.6882"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.9566 60.3582L26.3066 56.6582"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.3268 45.4682L23.6768 41.7682"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7766 160.798L35.5666 149.538L53.2166 155.388C54.9966 155.978 56.6666 154.268 56.0566 152.498L49.9366 134.888L60.9166 119.868C62.0266 118.358 60.9166 116.228 59.0466 116.268L40.4666 116.648L29.6066 101.508C28.5166 99.9881 26.1566 100.378 25.6166 102.168L20.2566 120.008L2.56665 125.678C0.786648 126.248 0.436648 128.618 1.96665 129.688L17.2266 140.338L17.1466 158.978C17.1466 160.858 19.2766 161.928 20.7666 160.798H20.7766Z"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M107.217 110.178L93.9669 100.088L78.1569 105.338C76.5669 105.868 75.0669 104.338 75.6169 102.748L81.0969 86.9682L71.2569 73.5082C70.2669 72.1582 71.2569 70.2482 72.9269 70.2782L89.5669 70.6182L99.2969 57.0582C100.277 55.6982 102.387 56.0482 102.867 57.6582L107.667 73.6482L123.517 78.7282C125.117 79.2382 125.427 81.3682 124.057 82.3282L110.387 91.8682L110.457 108.568C110.457 110.248 108.547 111.208 107.217 110.198V110.178Z"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M156.227 136.278L164.737 129.798L174.887 133.168C175.907 133.508 176.877 132.528 176.517 131.508L172.997 121.378L179.317 112.738C179.957 111.868 179.317 110.648 178.247 110.668L167.567 110.888L161.317 102.178C160.687 101.298 159.337 101.528 159.017 102.558L155.937 112.818L145.757 116.078C144.737 116.408 144.527 117.768 145.417 118.388L154.197 124.518L154.157 135.238C154.157 136.318 155.387 136.938 156.237 136.278H156.227Z"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.9165 33.3281L67.8565 27.2881L77.3265 30.4281C78.2765 30.7481 79.1765 29.8281 78.8465 28.8781L75.5665 19.4281L81.4665 11.3681C82.0565 10.5581 81.4665 9.41813 80.4665 9.43813L70.4965 9.63813L64.6665 1.50813C64.0765 0.688133 62.8165 0.898133 62.5265 1.86813L59.6465 11.4481L50.1465 14.4881C49.1865 14.7981 48.9965 16.0681 49.8265 16.6381L58.0165 22.3581L57.9765 32.3681C57.9765 33.3781 59.1165 33.9481 59.9165 33.3381V33.3281Z"
        stroke={stroke}
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default StarsSvg;
