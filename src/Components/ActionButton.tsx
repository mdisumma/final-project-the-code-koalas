// any is applied to the onClick functionality
interface ActionButtonProps {
  text: string;

  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button className="actionButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
