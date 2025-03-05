import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
   inputValue: string = 'Hello';
   isDisabled: boolean = false;
   imgSrc: string = '/assets/Angular.png';
   display(msg: string){
      alert(msg);
   }
}
