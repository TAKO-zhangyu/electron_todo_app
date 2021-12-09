import React, { useState } from 'react';
import Button from './Button';

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
  const [text, setText] = useState(todo.title)

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
            edit
              ? <input name="title" type="text" value={text} onChange={handleChange} className="siimple-input"/>
              : todo.title
          }
          <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>

          {/* {
            edit
              ? <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={handleTodoUpdate}>Update</span>
              : <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={() => setEdit(true)}>Edit</span>
          } */}

          {
            edit
              ? <Button onClick={handleTodoUpdate}/>
              : <Button onClick={() => setEdit(true)}/>
          }
          
        </li>
      )
}
export default Todo