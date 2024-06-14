import React from 'react';
import { Provider } from 'jotai';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  return (
    <Provider>
      <div className="app-container">
        <h1 className="app-title">Todo List</h1>
        <div className="app-content">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
