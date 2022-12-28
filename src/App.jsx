import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <h1 className='h1-edit'>To Do List App</h1>
    <div className='todo-app'>
      <TodoList />
    </div>
    </>
  );
}

export default App;
