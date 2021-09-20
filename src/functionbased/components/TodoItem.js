/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({
  todo, handleChange, handleDelete, handleUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleFinishedUpdate = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const { completed, id, title } = todo;
  const viewMode = {};
  const editMode = {};
  if (editing) {
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
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChange(id)}
        />
        <button type="button" onClick={() => handleDelete(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        className={styles.input}
        type="text"
        style={editMode}
        value={title}
        onChange={(e) => handleUpdate(e.target.value, id)}
        onKeyDown={handleFinishedUpdate}
      />
    </li>
  );
};

const TodoItempropTypes = {
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
  todo: PropTypes.object,
};

PropTypes.checkPropTypes(TodoItempropTypes, 'TodoItem');

export default TodoItem;
