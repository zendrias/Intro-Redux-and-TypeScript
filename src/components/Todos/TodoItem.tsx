import React from 'react';
import { TodoItemProps } from '../../Types/Types'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from './TodoSlice'
import { AppDispatch } from '../../app/store'

function TodoItem({ todo }: TodoItemProps): JSX.Element {

  let dispatch: AppDispatch = useDispatch()

  return (
    <div>
      <h3>{todo.title}</h3>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      {todo.completed ? (
        <button onClick={() => dispatch(toggleComplete(todo.id))}>Revert</button>
      ) : (
        <button onClick={() => dispatch(toggleComplete(todo.id))}>Complete</button>
      )}
    </div>
  );
}

export default TodoItem;