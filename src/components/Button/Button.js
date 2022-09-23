import "./button.css";

export const Button = ({ backgroundColor, size, label, onClick }) => {
  return (
    <buton
      backgroundColor={backgroundColor}
      size={size}
      onClick={onClick}
      className="bt-glass"
    >
      {label}
    </buton>
  );
};
