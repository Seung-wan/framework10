import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  title: string;
  content: string;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.title) {
      alert('todo가 없습니다!');
      return;
    }
    const newTodo = { title: this.title, content: this.content };
    this.onAddTodo.emit(newTodo);
    this.title = '';
    this.content = '';
  }
}
