import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './functionbased/components/TodoContainer';
import './functionbased/components/App.css';

ReactDOM.render(
  <React.StrictMode>
    {' '}
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
