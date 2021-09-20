import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todos, handleChange, handleDelete, handleUpdate,
}) => (
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

TodoList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.array()).isRequired,
};

export default TodoList;
