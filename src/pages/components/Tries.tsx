import styles from "@/styles/Home.module.css";

const Tries: React.FC<{ tries: number }> = ({ tries }) => {
  const boxes = Array.from({ length: 3 }, (_, index) => (
    <span key={index} className={styles.box}>
      {tries > index && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
          fill="#ff5050"
        >
          <path
            stroke="#ff5050"
            strokeWidth={"3rem"}
            d="M480 623.739 272.87 830.87q-10.196 10.195-23.87 10.195-13.674 0-23.87-10.195-10.195-10.196-10.195-23.87 0-13.674 10.195-23.87L432.261 576 225.13 368.87q-10.195-10.196-10.195-23.87 0-13.674 10.195-23.87 10.196-10.195 23.87-10.195 13.674 0 23.87 10.195L480 528.261 687.13 321.13q10.196-10.195 23.87-10.195 13.674 0 23.87 10.195 10.195 10.196 10.195 23.87 0 13.674-10.195 23.87L527.739 576 734.87 783.13q10.195 10.196 10.195 23.87 0 13.674-10.195 23.87-10.196 10.195-23.87 10.195-13.674 0-23.87-10.195L480 623.739Z"
          />
        </svg>
      )}
    </span>
  ));
  return (
    <div className="tries-counter">
      <ul className={styles.boxes}>{boxes}</ul>
    </div>
  );
};

export default Tries;
