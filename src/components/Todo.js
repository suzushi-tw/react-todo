import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FaTag } from 'react-icons/fa';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, addLabel }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const [label, setLabel] = useState({});

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // const handleLabel=id=>{
  //   const labelinput=prompt('Enter a  label');
  //   let message;
  //   message=input;
  //   return message;
  // };
  // const handleLabel = id => {
  //   const labelInput = prompt('Enter a label');
  //   setLabel(labelInput);
  // };

  const handleLabel = id => {
    const labelInput = prompt('Enter a label');
    const newLabel = { ...label };
    newLabel[id] = labelInput;
    setLabel(newLabel);
  };



  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index} 
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text} 
        <span className='todo-label'>
          {label[todo.id]}
        </span>
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <FaTag 
          onClick={()=>handleLabel(todo.id)} className='label-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;