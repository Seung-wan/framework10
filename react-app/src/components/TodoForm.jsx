import React from 'react';
import useInput from '../hooks/useInput';
export default function TodoForm({ setIsOpen, todoList, setTodoList }) {
  const [titleProps, resetTitle] = useInput('');
  const [contentProps, resetContent] = useInput('');
  const onAddHandler = () => {
    setTodoList([
      ...todoList,
      { title: titleProps.value, content: contentProps.value },
    ]);
    setIsOpen(false);
    resetTitle();
    resetContent();
  };
  return (
    <div>
      <label>Title</label>
      <input type="text" {...titleProps} />
      <br />
      <label>Content</label>
      <input type="text" {...contentProps} />
      <button onClick={onAddHandler}>추가</button>
    </div>
  );
}
