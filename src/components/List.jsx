import React from 'react';
import Todo from './Todo';

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return (
        <Todo 
              todo={todo} 
              i={i} 
              handleRemove={props.handleRemove} 
              handleUpdate={props.handleUpdate} 
        />
      )
    })}
  </ul>
)

export default List