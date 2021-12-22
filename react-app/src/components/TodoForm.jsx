import React from 'react';
import axios from 'axios';
import useInput from '../hooks/useInput';
export default function TodoForm({
  id,
  setIsOpen,
  setIsEditOpen,
  addTodoList,
  updateTodoList,
}) {
  const [titleProps, resetTitle] = useInput('');
  const [contentProps, resetContent] = useInput('');

  const onAddHandler = async () => {
    addTodoList(titleProps.value, contentProps.value);
    setIsOpen(false);
    resetTitle();
    resetContent();
  };
  const onUpdateHandler = async () => {
    updateTodoList(id, titleProps.value, contentProps.value);
    setIsEditOpen(false);
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
      {addTodoList ? (
        <button onClick={onAddHandler}>추가</button>
      ) : (
        <button onClick={onUpdateHandler}>수정</button>
      )}
      {/* <button onClick={onAddHandler}>추가</button> */}
    </div>
  );
}
