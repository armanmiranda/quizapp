export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (props: unknown) => void;
  buttonType?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}
