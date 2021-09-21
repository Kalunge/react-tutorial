import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    } else {
      alert('PLease add something');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="add Todo"
          className="input-text"
          value={title}
          onChange={onChange}
          name="title"
        />
        <button className="input-submit" type="submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    </div>
  );
};

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default InputTodo;
