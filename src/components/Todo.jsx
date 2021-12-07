import React, { useState } from 'react';

let style = {
  maxWidth: '50%',
  margin: '0 auto',
};

let btn = {
  cursor: 'pointer'
};

// 分割代入 -> { i, todo } 
// 関数の引数としても使える
const Todo = (props) => {
  const { i, todo } = props

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value)
  }

  const handleTodoUpdate = (e) => {
    setEdit(false)
    props.handleUpdate(text, i)
  }

  return (
        <li key={i} className="siimple-list-item siimple--bg-white" style={style}>

          {
            (function() {
              if (edit) {
                return(
                  <form className="siimple-form" onSubmit={props.handleUpdate}>
                    <div className="siimple-form-field">
                      <input name="title" type="text" value={text} onChange={handleChange} className="siimple-input"/>
                      <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={handleTodoUpdate}>Update</span>
                      <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
                    </div>
                  </form>
                );
              } else {
                return(
                  <p>{todo.title}</p>
                  // <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={() => setEdit(true)}>Edit</span>
                );
              }
            })()
          }
         

          {
            (function() {
              if (edit) {
                // return(
                // <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={handleTodoUpdate}>Update</span>
                // );
              } else {
                return(
                <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={() => setEdit(true)}>Edit</span>
                );
              }
            })()
          }
          
        </li>
      )
}
export default Todo