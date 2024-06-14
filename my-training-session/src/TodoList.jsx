import React, { useRef } from 'react';
import { useAtom } from 'jotai';
import { todoListAtom } from './atoms';
import './TodoList.css';

const TodoList = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const selectRefs = useRef([]);

  if (selectRefs.current.length !== todoList.length) {
    selectRefs.current = Array(todoList.length)
      .fill()
      .map((_, i) => selectRefs.current[i] || React.createRef());
  }

  const toggleComplete = (index) => {
    const newList = [...todoList];
    newList[index].completed = !newList[index].completed;

    if (newList[index].completed) {
      newList[index].color = selectRefs.current[index].current.value;
    } else {
      newList[index].color = 'white'; 
    }

    setTodoList(newList);
  };

  const handleColorChange = (index) => {
    const color = selectRefs.current[index].current.value;
    const newList = [...todoList];
    newList[index].color = color;

    if (newList[index].completed) {
      setTodoList(newList);
    }
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li key={index} className="todo-item" style={{ backgroundColor: todo.color }}>
          <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          <select
            className="todo-select"
            ref={selectRefs.current[index]}
            value={todo.color}
            onChange={() => handleColorChange(index)}
          >
            <option value="white">None</option>
            <option value="#c5f0da">Green</option>
            <option value="#FDFFE2">Yellow</option>
            <option value="#ebd1ca">Red</option>
          </select>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
