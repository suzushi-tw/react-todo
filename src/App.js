import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import styles from "./index.css"

function App() {
  return (
    <div className="todo-app">
      <h1 className='text-transparent bg-clip-text 
          bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400'>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
