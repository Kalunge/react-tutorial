import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodo(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('PLease add something');
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="add Todo"
            className="input-text"
            value={this.state.title}
            onChange={this.onChange}
            name="title"
          ></input>
          <button className="input-submit" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
