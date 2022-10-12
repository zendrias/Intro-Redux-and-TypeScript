import React from 'react';
import './App.css';
import InputForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList';
function App() {
  return (
    <div className="App">
      <h1>Zena BEST Todo List</h1>
      < InputForm />
      <TodoList />
    </div >
  );
}

export default App;
