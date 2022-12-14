import "./button.css";
import PropTypes from "prop-types";

export const Button = ({
  backgroundColor,
  backdropFilter,
  size,
  label,
  onClick,
}) => {
  return (
    <buton
      style={{
        backgroundColor: backgroundColor,
        backdropFilter: backdropFilter,
      }}
      size={size}
      onClick={onClick}
      className="bt-glass"
    >
      {label}
    </buton>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
};
