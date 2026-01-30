import type { ButtonHTMLAttributes } from "react";
import styles from "@shared/ui/Button/Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type="button"
      {...props}
    />
  );
};
