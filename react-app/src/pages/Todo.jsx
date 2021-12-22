import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';

export default function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState([
    { title: '공부', content: 'react,next.js' },
  ]);
  const onClickHandler = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <h1>Todo Component</h1>
      Todo List <button onClick={onClickHandler}>+</button>
      {isOpen && (
        <TodoForm
          setIsOpen={setIsOpen}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
      <ul>
        {todoList.map((todo, idx) => {
          return (
            <li style={{ listStyle: 'none' }} key={idx}>
              <h1>title:{todo.title}</h1>
              <p>content : {todo.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
