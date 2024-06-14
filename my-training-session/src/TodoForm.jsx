import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { todoListAtom } from './atoms';
import './TodoForm.css';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useAtom(todoListAtom);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodoList([...todoList, { text: inputValue, completed: false, color: 'default' }]);
      setInputValue('');
    }
  };

  const isInputValid = inputValue.length > 10;

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter todo..."
      />
      <button className="todo-button" type="submit" disabled={!isInputValid}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
