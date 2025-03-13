import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  imports: [CommonModule],
  templateUrl: './ngfor-directive.component.html',
  styleUrl: './ngfor-directive.component.css'
})
export class NgforDirectiveComponent {
    fullStackDev = [
      {
        id: 1,
        name: 'Angular',
      }
      ,
      {
        id: 2,
        name: 'React',
      }
      ,
      {
        id: 3,
        name: 'Vue',
      }
      ,
      {
        id: 4,
        name: 'Node',
      }
      ,
      {
        id: 5,
        name: 'Express',
      }

    ]

    trackByItemId(item: any) {
      return item.id;
    }

    updateItem() {
      this.fullStackDev[0] = {id: 1, name: 'Java'};
    }


    items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
}
