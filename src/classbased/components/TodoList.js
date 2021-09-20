import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleChange, handleDelete, handleUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          handleDelete={handleDelete}
          handleChange={handleChange}
          todo={todo}
          key={todo.id}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
