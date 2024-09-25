// any is applied to the onClick functionality
interface ActionButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export default function ActionButton({ text, onClick, disabled }: ActionButtonProps) {
  return (
    <button className="actionButton" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

