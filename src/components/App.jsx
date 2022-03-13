import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from  './List';
const { ipcRenderer } = window.require("electron");

const App = () => {
  const [todos, setTodos] = useState([]);

  // 最初だけ発動
  useEffect(()=>{
    ipcRenderer.invoke('read_storage').then((todos_json) => {
      setTodos(todos_json);
    })
  }, []);

  // todosが変わるたびに発動
  useEffect(()=>{
    ipcRenderer.invoke('commit_storage', todos);
  });

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