export interface IModalProps {
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  className?: string;
}
