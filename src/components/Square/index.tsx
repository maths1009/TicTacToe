import styles from "./index.module.scss";

interface SquareProps extends HTMLProps<"button"> {
  value: string;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};
