import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {

  isCompleted =input(false);
  el =inject(ElementRef);
  stylesEffect =effect( () =>
  {
 
    if(this.isCompleted())
    {
      this.el.nativeElement.style.textDecoration ='line-through';
      this.el.nativeElement.style.backgroundcolor ='#d3f9d8';
      this.el.nativeElement.style.color ='#6c757d';
    }
    else{
      this.el.nativeElement.style.textDecoration ='none';
      this.el.nativeElement.style.backgroundcolor ='#fff';
      this.el.nativeElement.style.color ='#000';
    }
  })

}
