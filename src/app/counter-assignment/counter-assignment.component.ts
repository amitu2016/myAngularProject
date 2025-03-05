import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-assignment',
  imports: [],
  templateUrl: './counter-assignment.component.html',
  styleUrl: './counter-assignment.component.css'
})
export class CounterAssignmentComponent {
    counter: number = 0;
    onKeydown(e: KeyboardEvent){
        alert('Key pressed');
        if(e.key === 'ArrowUp'){
            this.counter++;
        } else if(e.key === 'ArrowDown'){
            this.counter--;
        }
    }
}
