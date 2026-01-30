import type { InputHTMLAttributes } from "react";
import styles from "@shared/ui/Input/Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <input className={styles.input} {...props} />;
};
