import { CSSProperties } from 'react';

// any is applied to the onClick functionality
interface ActionButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
  style?: CSSProperties;
}

export default function ActionButton({ text, onClick, disabled, style }: ActionButtonProps) {
  return (
    <button className="actionButton" onClick={onClick} disabled={disabled} style={style}>
      {text}
    </button>
  );
};

