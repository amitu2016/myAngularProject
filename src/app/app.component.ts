import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { KeyboardEventsComponent } from './keyboard-events/keyboard-events.component';
import { CounterAssignmentComponent } from './counter-assignment/counter-assignment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, KeyboardEventsComponent, CounterAssignmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count: number = 0;
  counter(type: string) {
    if (type === 'decrement') {
      this.count--;
    } else if (type === 'increment') {        
      this.count++;
    }
  }
}
