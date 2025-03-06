import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-task',
  imports: [FormsModule],
  templateUrl: './two-way-binding-task.component.html',
  styleUrl: './two-way-binding-task.component.css'
})
export class TwoWayBindingTaskComponent {
    inputVal: string = '';
    dynamicVal: string = '';

    show(){
      this.dynamicVal = this.inputVal;
      console.log(this.dynamicVal);
    }
}
