'use client'; // <-- Lägg till den här raden överst
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  dark?: boolean; // valfri mörk variant
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  dark = false,
}: Props) {
  const cls = [
    styles.btn,
    fullWidth ? styles.fullWidth : "",
    dark ? styles.dark : "",
  ].join(" ");

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}