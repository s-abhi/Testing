import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  newTodoText: any;
  todos = [
    {
      text: 'Buy groceries',
      completed: false
    },
    {
      text: 'Do laundry',
      completed: true
    },
    {
      text: 'Clean the house',
      completed: false
    }
  ];

  addTodo() {
    this.todos.push({
      text: this.newTodoText,
      completed: false
    });
  }

  toggleTodo(todo: any) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: any) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
