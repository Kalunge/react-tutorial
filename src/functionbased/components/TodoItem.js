import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, handleChange, handleDelete, handleUpdate }) => {
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
  let viewMode = {};
  let editMode = {};
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
        <button onClick={() => handleDelete(id)}>
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

export default TodoItem;
