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

  const handleTodoUpdate = () => {
    setEdit(false)
    props.handleUpdate(i)
  }

  return (
        <li key={i} className="siimple-list-item siimple--bg-white" style={style}>

          {
            (function() {
              if (edit) {
                return(
                  todo.title
                );
              } else {
                return(
                  todo.title
                );
              }
            })()
          }
          <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>

          {
            (function() {
              if (edit) {
                return(
                <form className="siimple-form" onSubmit={props.handleUpdate}>
                  <div className="siimple-form-field" style={style}>
                    <input name="title" type="text" className="siimple-input"/>
                    <input type="submit" className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={handleTodoUpdate}/>
                  </div>
                </form>
                );
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