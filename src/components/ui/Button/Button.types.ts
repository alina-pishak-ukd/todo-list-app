export interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
}
