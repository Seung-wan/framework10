import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoLists: Todo[] = [];
  isOpen: boolean = false;
  subscription: Subscription;
  constructor(private todoService: TodoService, private uiService: UiService) {
    this.subscription = this.uiService
      .onOpen()
      .subscribe((value) => (this.isOpen = value));
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todoLists) => {
      this.todoLists = todoLists;
    });
  }
  openAddTodo() {
    this.uiService.openAddTodo();
  }

  addTodo(todo: Todo) {
    this.todoService
      .postTodo(todo)
      .subscribe(() => (this.todoLists = [...this.todoLists, todo]));
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todoLists = this.todoLists.filter((t) => todo.id !== t.id);
    });
  }
  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe();
  }
}
