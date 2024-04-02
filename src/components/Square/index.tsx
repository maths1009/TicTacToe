import styles from "./index.module.scss";

interface SquareProps extends Omit<HTMLProps<"button">, "value"> {
  value: string | null;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};
