import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchterm: string): Todo[] {
    if(!searchterm)
      {
        return todos;
      }
      const text = searchterm.toLowerCase();
      return todos.filter(todo =>
      {
        return todo.title.toLocaleLowerCase().includes(text);
      })
  }

}
