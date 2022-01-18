import React, { useState } from 'react';
import Form from './Form';
import List from  './List';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = { title: e.target.title.value };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    e.target.title.value = '';
  };

  const handleRemove = (i) => {
    const newTodos = [...todos]
    newTodos.splice(i,1);
    setTodos(newTodos);
  };

  const handleUpdate = (text, i) => {
    const newTodos = [...todos]
    newTodos[i].title= text;
    setTodos(newTodos);
  };


  return (
    <div className="siimple-box siimple--bg-dark">
      <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
      <Form handleAdd={handleAdd}/>
      <div className="siimple-rule"></div>
      <List 
        todos={todos}
        handleRemove={handleRemove}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App