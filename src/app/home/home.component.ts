import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 
homeMessage = signal("This is message from home");


keyUpHandler(event:KeyboardEvent) {
  console.log( 'User presed the '+ event.key + ' key ');
  }
}


