import React, { Component } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
export default class TodoContainer extends Component {
  state = {
    todos: [],
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    if(localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"))
      this.setState({todos})
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  updateItem = (updateTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={this.addItem} />
          <TodoList
            handleDelete={this.handleDelete}
            handleChange={this.handleChange}
            todos={this.state.todos}
            handleUpdate={this.updateItem}
          />
        </div>
      </div>
    );
  }
}
