import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-structural-directives-assignment',
  imports: [CommonModule],
  templateUrl: './structural-directives-assignment.component.html',
  styleUrl: './structural-directives-assignment.component.css'
})
export class StructuralDirectivesAssignmentComponent {
  displayElement: boolean = true;

  toggleDisplay() {
    this.displayElement = !this.displayElement;
  }
}
