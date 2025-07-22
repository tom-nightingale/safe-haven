type Props = {
  stroke?: string;
  classes?: string;
};

const duckSvg = ({ stroke = "#D6CFC7", classes }: Props) => {
  return (
    <svg
      width="105"
      height="97"
      viewBox="0 0 105 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <g clipPath="url(#clip0_738_883)">
        <path
          d="M87.5401 38.8866C85.773 31.0105 77.5648 24.9145 68.0075 27.2315C67.3464 27.3878 66.7119 27.0178 66.6025 26.3596C66.0121 22.8384 63.9789 19.3687 60.0729 16.9502C57.9654 15.6424 55.4301 15.0774 52.9614 15.3305C42.4156 16.43 37.7708 27.1515 42.3388 35.0635C44.5773 38.9407 48.4875 41.2365 52.6473 41.5698C52.9638 41.5975 53.0831 41.9343 52.8825 42.1854C48.9694 47.2248 31.415 62.2137 18.1946 60.8149C17.807 60.7682 17.4208 61.0363 17.3515 61.4369C15.2389 74.2279 29.2103 85.1264 44.5949 83.1418C56.577 81.5888 69.0287 74.9408 75.466 68.3389C85.1219 58.4361 90.0284 49.9379 87.5466 38.8978L87.5401 38.8866Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M61.7053 18.1117L70.0946 7.60272C71.5997 5.5766 75.0542 6.30216 75.9534 8.84866C76.7692 11.1728 76.5511 15.1157 73.5265 21.746"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.8136 22.2885C56.9567 22.5365 56.8645 22.8452 56.6278 22.9818C56.3911 23.1185 56.0711 23.0328 55.9344 22.7961C55.7978 22.5594 55.8835 22.2394 56.1202 22.1027C56.3569 21.9661 56.6769 22.0518 56.8136 22.2885Z"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M62.4971 52.774C64.955 57.0053 63.778 64.2068 55.7871 68.8204C49.3289 72.549 43.9889 70.718 40.7931 66.8225C40.4222 67.2471 39.9653 67.6011 39.4273 67.8666C37.1627 68.9937 34.4127 68.0568 33.2856 65.7922"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74.9038 33.4237C74.9038 33.4237 80.1753 34.0169 81.4771 39.9676"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_883">
          <rect
            width="83.2916"
            height="62.5598"
            fill="white"
            transform="translate(0.754883 42.4514) rotate(-30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default duckSvg;
