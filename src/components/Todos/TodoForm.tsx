import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from './TodoSlice'
import { AppDispatch } from '../../app/store'

function TodoForm() {
  let [inputValue, setInputValue] = useState("")
  let dispatch: AppDispatch = useDispatch()

  const handleSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch(addTodo(inputValue))
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Go</button>
    </form>
  );
}

export default TodoForm;