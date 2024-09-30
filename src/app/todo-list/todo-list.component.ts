import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { TodoFacadeService } from './todo-list.facade';
import { TodoListViewModel } from './todo-list.models';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: 'todo-list.component.scss',
})
export class TodoListComponent {
  private facade = inject(TodoFacadeService);

  vm: TodoListViewModel;

  constructor() {
    this.vm = this.facade.vm;
  }
}
