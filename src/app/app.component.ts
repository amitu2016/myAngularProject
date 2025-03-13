import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { KeyboardEventsComponent } from './keyboard-events/keyboard-events.component';
import { CounterAssignmentComponent } from './counter-assignment/counter-assignment.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwoWayBindingTaskComponent } from './two-way-binding-task/two-way-binding-task.component';
import { SimpleCartCalculationComponent } from './simple-cart-calculation/simple-cart-calculation.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleCartCalculationComponent, StructuralDirectivesComponent],
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
