import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  isOpen: boolean = false;
  title: string;
  content: string;

  subscription: Subscription;
  @Input() todo: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() btnClick: EventEmitter<Todo> = new EventEmitter();
  @Output() onModifyTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onOpen()
      .subscribe((value) => (this.isOpen = value));
  }

  ngOnInit(): void {}

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }
  onOpenForm() {
    this.btnClick.emit();
  }
  onSubmit(todo: Todo) {
    if (!this.title) {
      alert('todo가 없습니다!');
      return;
    }
    const newTodo = { id: todo.id, title: this.title, content: this.content };
    this.onModifyTodo.emit(newTodo);
    this.title = '';
    this.content = '';

    this.btnClick.emit();
  }
}
