/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import NotMatch from './pages/NotMatch';
import About from './pages/About';
import Navbar from './Navbar';

const TodoContainer = () => {
  const getSavedTodos = () => JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(getSavedTodos());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateItem = (updateTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      }),
    );
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodo={addItem} />
              <TodoList
                handleDelete={handleDelete}
                handleChange={handleChange}
                todos={todos}
                handleUpdate={updateItem}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
