import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../Types/Types'


const initialState: Todo[] = []


let todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>): void => {
      let newTodo: Todo = {
        title: action.payload,
        id: Date.now(),
        completed: false
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return initialState.filter(todo => todo.id !== action.payload)
    },

    toggleComplete: (state, action: PayloadAction<number>) => {
      return state.map(todo => action.payload === todo.id ? { ...todo, completed: !todo.completed } : todo)
    }
  }
})


export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer