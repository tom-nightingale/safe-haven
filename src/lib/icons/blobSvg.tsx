type Props = {
  stroke?: string;
  classes?: string;
};

const BlobSvg = ({ stroke = "#FFFFFF", classes }: Props) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      fill="none"
    >
      <path
        fill={stroke}
        d="M37.1,-62.1C49.7,-56.9,62.8,-50.3,65.8,-39.8C68.9,-29.2,62,-14.6,56.2,-3.4C50.3,7.8,45.5,15.6,43.3,27.8C41.2,40.1,41.7,56.7,35,62.7C28.2,68.7,14.1,64.1,-1,65.8C-16,67.4,-32,75.3,-44.7,72.7C-57.4,70.1,-66.7,57,-72.9,43.1C-79,29.3,-82,14.6,-79.4,1.5C-76.7,-11.6,-68.5,-23.2,-61.9,-36.3C-55.3,-49.3,-50.2,-63.8,-40.2,-70.5C-30.1,-77.2,-15.1,-76.1,-1.4,-73.6C12.2,-71.2,24.4,-67.3,37.1,-62.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
export default BlobSvg;
