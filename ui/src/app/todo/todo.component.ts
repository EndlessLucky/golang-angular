import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  activeTodos: Todo[] = [];
  completedTodos: Todo[] = [];
  todoMessage: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.todoService.getTodoList().subscribe((data: any) => {
      this.activeTodos = data.filter((a: any) => !a.complete);
      this.completedTodos = data.filter((a: any) => a.complete);
    });
  }

  addTodo() {
    var newTodo : Todo = {
      message: this.todoMessage,
      id: '',
      complete: false
    };

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.getAll();
      this.todoMessage = '' 
    });
  }

  completeTodo(todo: Todo){
    this.todoService.completeTodo(todo).subscribe(() => {
      this.getAll();
    });
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.getAll();
    });
  }
}
