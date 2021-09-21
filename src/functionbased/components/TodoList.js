/* eslint-disable react/prop-types */
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

const TodolistPropTypes = {
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
  todos: PropTypes.array,
};

PropTypes.checkPropTypes(TodolistPropTypes, 'TodoList');

export default TodoList;
