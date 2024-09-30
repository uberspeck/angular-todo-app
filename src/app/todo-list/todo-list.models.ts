import { Signal } from '@angular/core';

export type TodoListViewModel = {
  todos: Signal<TodoItem[]>;
  api: TodoListApi;
};

export type TodoListApi = {
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (updatedTodo: TodoItem) => void;
};

export type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};
