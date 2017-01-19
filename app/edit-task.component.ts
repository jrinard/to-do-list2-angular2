import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="childSelectedTask">
      <h3>{{childSelectedTask.description}}</h3>
      <p>Task Complete? {{childSelectedTask.done}}</p>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label> <!-- !!!!!!! Do we want this verison or should we make it dryer -->
      <input [value]="childSelectedTask.description" (input)="childSelectedTask.description = $event.target.value">
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="childSelectedTask.priority" [value]="3">3 (High Priority)
      <button class="btn btn-xs" (click)="doneButtonClicked()">Close</button>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(): void {
    this.doneButtonClickedSender.emit();
  }
}
