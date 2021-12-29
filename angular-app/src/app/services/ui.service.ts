import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTodo: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  openAddTodo(): void {
    this.showAddTodo = !this.showAddTodo;
    this.subject.next(this.showAddTodo);
  }

  onOpen(): Observable<any> {
    return this.subject.asObservable();
  }
}
