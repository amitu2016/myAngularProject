import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
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
