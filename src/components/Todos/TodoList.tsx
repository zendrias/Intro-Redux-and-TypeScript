import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem';
import { RootState, AppDispatch } from '../../app/store'
import { Todo } from '../../Types/Types'
function TodoList() {

  const dispatch: AppDispatch = useDispatch()

  const todos = useSelector((state: RootState) => state.todos)

  return (
    <div>
      {todos.map((todo: Todo) => (
        < TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;