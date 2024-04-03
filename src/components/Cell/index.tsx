import styles from "./index.module.scss";

interface CellProps extends Omit<HTMLProps<"button">, "value"> {
  value: string | null;
}

export const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};
