import React from 'react';

let style = {
  maxWidth: '50%',
  margin: '0 auto',
};

let btn = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return (
        <li key={i} className="siimple-list-item siimple--bg-white" style={style}>
          {todo.title} 
          <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
          <span className="siimple-tag siimple-tag--green siimple-hover" style={btn} onClick={() => props.handleEdit(i)}>Edit</span>
          {todo.edit} 
          {console.log(todo)} 
        </li>
      )
      // editing = trueだったらどうするかをliの中で取得
      // props.todosの中で、editだということがわかるようにする
      // {todo.title}のように, {todo.edit}をみて、trueだったらtext boxを表示させる。
      // 編集ボタンと完了ボタンの条件分岐もいる
    })}
  </ul>
)

export default List