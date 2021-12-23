import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoLists = this.getTodoList().pipe();

  constructor(private http: HttpClient) {}

  getTodoList() {
    return this.http.get<{ id: string; title: string; content: string }[]>(
      'http://localhost:3001/api/0.1/todo'
    );
  }

  ngOnInit(): void {}
}
