import React from "react";

let btn = {
  cursor: 'pointer'
};

const Button = ({onClick}) => {
  return <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={onClick}>更新も編集もこれ一個ボタン</span>;
};

export default Button;