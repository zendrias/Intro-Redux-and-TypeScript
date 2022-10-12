export interface Todo {
  title: string;
  id: number;
  completed: boolean
}

export interface Todos {
  todos: Todo[]
}

export interface TodoItemProps {
  todo: Todo
}