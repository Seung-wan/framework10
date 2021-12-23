import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from '../components/TodoForm';

export default function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    const fetchTodoList = async () => {
      const res = await axios.get('http://localhost:3001/api/0.1/todo');
      setTodoList(res.data);
    };
    fetchTodoList();
  }, []);

  const onClickHandler = () => {
    setIsOpen(true);
  };
  const addTodoList = async (title, content) => {
    await axios.post('http://localhost:3001/api/0.1/todo', { title, content });
    setTodoList([...todoList, { title, content }]);
  };
  const updateTodoList = async (id, title, content) => {
    await axios.patch('http://localhost:3001/api/0.1/todo', {
      id,
      title,
      content,
    });
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { title, content };
        }
        return todo;
      })
    );
  };
  const onUpdateHandler = async (id) => {
    setIsEditOpen(true);
  };
  const onDeleteHandler = async (id) => {
    await axios.delete('http://localhost:3001/api/0.1/todo', { data: { id } });
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <div>
      <h1>Todo Component</h1>
      Todo List <button onClick={onClickHandler}>+</button>
      {isOpen && <TodoForm setIsOpen={setIsOpen} addTodoList={addTodoList} />}
      <ul>
        {todoList.map((todo, idx) => {
          return (
            <React.Fragment key={idx}>
              {isEditOpen && (
                <TodoForm
                  setIsEditOpen={setIsEditOpen}
                  updateTodoList={updateTodoList}
                  id={todo.id}
                />
              )}
              <li key={idx} style={{ listStyle: 'none' }}>
                <h1>title:{todo.title}</h1>
                <p>content : {todo.content}</p>
                <button onClick={() => onUpdateHandler(todo.id)}>edit</button>
                <button onClick={() => onDeleteHandler(todo.id)}>delete</button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
