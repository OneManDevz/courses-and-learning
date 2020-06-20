import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
class App extends Component {
  state = {
    todos: [{ id: 1, content: 'buy something' }, { id: 2, content: 'play a game' }]
  };

  deleteTodo = id => {
    console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();

    this.setState({
      todos: [...this.state.todos, todo]
    });
    /*
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    */
  };

  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
