import React from "react";

let btn = {
  cursor: 'pointer'
};

const Button = ({ onClick, children, className }) => {
  return <span className={className} style={btn} onClick={onClick}>{children}</span>;
};

export default Button;