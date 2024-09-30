import { inject, Injectable } from '@angular/core';
import { StorageService } from '../core/services/storage.service';
import { TodoItem } from './todo-list.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private storageService = inject(StorageService);

  private readonly STORAGE_KEY = 'todoList';
  private readonly _todos$ = new BehaviorSubject<TodoItem[]>([]);

  public todos$ = this._todos$.asObservable();

  constructor() {
    this._todos$.next(this.getTodos());
  }

  private getTodos(): TodoItem[] {
    return this.storageService.getItem<TodoItem[]>(this.STORAGE_KEY) || [];
  }

  saveTodos(todos: TodoItem[]): void {
    this._todos$.next(todos);
    this.storageService.setItem(this.STORAGE_KEY, todos);
  }

  addTodo(newTodo: TodoItem): void {
    this.saveTodos([...this.getTodos(), newTodo]);
  }

  deleteTodo(id: string): void {
    let todos = this.getTodos().filter((todo) => todo.id !== id);

    this.saveTodos(todos);
  }

  updateTodo(updatedTodo: TodoItem): void {
    const todos = this.getTodos().map((todo) =>
      updatedTodo.id === todo.id ? updatedTodo : todo
    );

    this.saveTodos(todos);
  }
}
