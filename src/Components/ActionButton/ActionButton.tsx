// any is applied to the onClick functionality
interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

export default function ActionButton({ text, onClick }: ActionButtonProps) {
  return (
    <button className="actionButton" onClick={onClick}>
      {text}
    </button>
  );
};

