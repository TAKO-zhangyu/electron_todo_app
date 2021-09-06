import React from 'react';

let style = {
  textAlign: 'center',
};

let button = {
  marginLeft: '1%',
};

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.handleAdd}>
    <div className="siimple-form-field" style={style}>
      <label className="siimple-label siimple--color-white">Your todo:</label>
      <input name="title" type="text" className="siimple-input"/>
      <input type="submit" value="Add" className="siimple-btn siimple-btn--teal" style={button}/>
    </div>
  </form>
);

export default Form;