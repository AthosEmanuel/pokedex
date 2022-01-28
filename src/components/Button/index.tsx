import React from "react";

interface ButtonProps {
  text: string;
  handleEvent?: () => void;
  customStyles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, customStyles, handleEvent }) => {
  return (
    <button style={customStyles} onClick={handleEvent}>
      {text}
    </button>
  );
};

export default Button;
