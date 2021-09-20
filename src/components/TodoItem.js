import React, { Component } from 'react';
import styles from './TodoItem.module.css';

export default class TodoItem extends Component {
  state = {
    editing: false,
  };
  handleEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleFinishedUpdate = (e) => {
    if (e.key === 'Enter') {
      console.log(e.key);
      this.setState({ editing: false });
    }
  };

  componentWillUnmount() {
    console.log('cleaning up');
  }
  render() {
    let viewMode = {};
    let editMode = {};
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChange(id)}
          />
          <button onClick={() => this.props.handleDelete(id)}>delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          className={styles.input}
          type="text"
          style={editMode}
          value={title}
          onChange={(e) => this.props.handleUpdate(e.target.value, id)}
          onKeyDown={this.handleFinishedUpdate}
        />
      </li>
    );
  }
}
