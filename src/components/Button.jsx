import React from "react";

let btn = {
  cursor: 'pointer'
};

const Button = ({ onClick, children, className }) => {
  className += ' siimple-tag siimple-hover';
  return <span className={className} style={btn} onClick={onClick}>{children}</span>;
};

export default Button;