import React from 'react';
import Form from './Form';
import List from  './List';

const App = () => {
  const [todo, setTodo] = useState([]);

  const handleAdd = useCallback(
    // e.preventDefault();
    (e) => {
      setTodo(e.target.title.value);
    },
    [setTodo]
    // e.target.title.value = '';
  );

  const handleRemove = (i) => {
    // useState({title: e.target.title.value});
    setTodo({todo: todo.splice(i,1)});
  };

  const handleUpdate = (text, i) => {
    // this.state.todo[i].title = text;
    this.setState({todo: this.state.todo});
    setTodo({todo: xxx);
  };


  return (
    <div className="siimple-box siimple--bg-dark">
      <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
      <Form handleAdd={this.handleAdd}/>
      <div className="siimple-rule"></div>
      <List 
        todos={this.state.todo}
        handleRemove={this.handleRemove}
        handleUpdate={this.handleUpdate}
      />
    </div>
  );
}

export default App