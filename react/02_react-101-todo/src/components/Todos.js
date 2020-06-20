import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  //ternary operator on todos.length return true if > 0
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className='collection-item' key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className='center'>No Todos left</p>
  );

  return <div className='todos collection'>{todoList}</div>;
};

export default Todos;
