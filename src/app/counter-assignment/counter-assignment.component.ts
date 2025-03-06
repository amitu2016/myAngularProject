import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-assignment',
  imports: [],
  templateUrl: './counter-assignment.component.html',
  styleUrl: './counter-assignment.component.css'
})
export class CounterAssignmentComponent {
    counter: number = 0;
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.counter++;
    } else if (event.key === 'ArrowDown') {
      this.counter--;
    }
  }
}
