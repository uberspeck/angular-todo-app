import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoItem, TodoListViewModel } from './todo-list.models';
import { TodoDataService } from './todo-list.service';

@Injectable({
  providedIn: 'root',
})
export class TodoFacadeService {
  vm: TodoListViewModel;

  constructor(private todoDataService: TodoDataService) {
    this.vm = {
      todos: toSignal(this.todoDataService.todos$) as Signal<TodoItem[]>,
      api: {
        addTodo: this.addTodo.bind(this),
        deleteTodo: this.deleteTodo.bind(this),
        updateTodo: this.updateTodo.bind(this),
      },
    };
  }

  addTodo(text: string) {
    this.todoDataService.addTodo({
      id: Date.now().toString(),
      text,
      completed: false,
    });
  }

  deleteTodo(id: string) {
    this.todoDataService.deleteTodo(id);
  }

  updateTodo(updatedTodo: TodoItem) {
    this.todoDataService.updateTodo(updatedTodo);
  }
}
