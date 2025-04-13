import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports:  [TodoItemComponent,FormsModule,FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

ngOnInit(): void {

  this.todoservice.getToDoFromApi()
  .pipe(catchError((err)=> {
     console.log("Error" + err);
     throw err;
    })
  ).subscribe((todos) => {
    this.todoItems.set(todos);
  })

}

todoservice =inject(TodosService);

todoItems = signal<Array<Todo>>([]);

searchterm = signal('');

updateToDoItem (todoItem:Todo)
{
  this.todoItems.update((todos) =>
  {
    return todos.map(todo => {
      if(todo.id === todoItem.id){
        return {
          ...todo,
          completed : !todo.completed
        }
      }
      return todo;
    })
  })
}


}
