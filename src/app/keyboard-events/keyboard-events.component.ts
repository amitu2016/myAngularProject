import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-events',
  imports: [],
  templateUrl: './keyboard-events.component.html',
  styleUrl: './keyboard-events.component.css'
})
export class KeyboardEventsComponent {
  // onKeyPress(e: any){
  //   console.log(e.target.value);
  // }
  onShift(e: any){
    if(e.shiftKey && e.key === 'Y'){
      console.log('Shift + Y key is pressed');
    }
  }
}
