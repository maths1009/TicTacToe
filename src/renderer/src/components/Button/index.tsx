import clsx from "clsx";
import styles from "./index.module.scss";

type ButtonProps = HTMLProps<"button"> & React.PropsWithChildren;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};
