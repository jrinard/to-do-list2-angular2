//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './task.model';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // decorator defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <task-list></task-list>
    <hr>
    <div *ngIf="selectedTask">
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
        <h3>Edit Task</h3>
        <label>Enter Task Description:</label>
        <input [value]="selectedTask.description" (input)="selectedTask.description = $event.target.value">
        <label>Enter Task Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
        <button class="btn btn-xs" (click)="finishedEditing()">Close</button>
      </div>
   </div>
  `
})

//Part 2 COMPONENT CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {
  currentFocus: string = 'Angular Homework'; // Dynamic value
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1; //TIP when a variable in a component's class declaration references another variable in the class, it must be prefaced with the "this" keyword.
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();


  selectedTask: Task = null;

  editTask(clickedTask: Task): void {
    this.selectedTask = clickedTask;
  }

  finishedEditing(): void {
    this.selectedTask = null;
  }

}
