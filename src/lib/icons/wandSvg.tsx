type Props = {
  stroke?: string;
  classes?: string;
};

const wandSvg = ({ stroke = "#EBE0D7", classes }: Props) => {
  return (
    <svg
      width="85"
      height="85"
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <g clipPath="url(#clip0_738_1509)">
        <path
          d="M30.5434 50.2586C31.4076 50.2586 32.2151 50.6742 32.7062 51.3825L40.172 62.0972C40.9984 63.2919 42.8353 63.0133 43.2745 61.6297L46.8351 50.4617L47.2364 49.1961C47.4962 48.3744 48.1478 47.7322 48.9742 47.4819L50.6128 46.9861L61.4692 43.6994C62.8576 43.2839 63.1645 41.4469 61.9839 40.6017L51.3778 32.9894C50.6742 32.4842 50.2681 31.6672 50.287 30.8078L50.5467 17.7556C50.5751 16.3058 48.927 15.4464 47.7559 16.3106L37.2395 24.0361C36.5453 24.5508 35.6434 24.6831 34.8264 24.3997L22.492 20.1167C21.1226 19.6397 19.8003 20.9431 20.2537 22.3219L24.3573 34.7131C24.6312 35.53 24.4801 36.4319 23.9606 37.1167L16.0792 47.5244C15.2009 48.6814 16.0367 50.3436 17.4817 50.3342L30.5387 50.2633L30.5434 50.2586Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6166 11.6167L15.3188 15.3189"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.944551 32.5739L7.39038 33.5655"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.62778 55.8025L10.4597 52.8086"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.2594 72.4342L24.2485 66.5975"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.488 76.1128L43.4964 69.667"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.8398 50.457L74.8189 82.2611C76.8353 84.5467 80.3581 84.66 82.5114 82.5067C84.5845 80.4336 84.5609 77.0903 82.5114 75.0456C82.4311 74.9653 82.3509 74.8897 82.2611 74.8142L50.6175 46.9767"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.1128 44.4881L69.667 43.4965"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72.4294 21.2594L66.5975 24.2486"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55.7979 4.62781L52.8087 10.4598"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.5691 0.944458L33.5608 7.39029"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_1509">
          <rect
            width="85"
            height="85"
            fill="white"
            transform="matrix(-1 0 0 1 85 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default wandSvg;
