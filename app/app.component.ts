//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // decorator defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
      <li *ngFor="let currentTask of tasks" [class]="priorityColor(currentTask)"(click)="isDone(currentTask)" >{{currentTask.description}} <button class="btn btn-xs" (click)="editTask(currentTask)">Edit</button></li><!-- assigning li tag to a loop/repeater // button is called an event binding-->
    </ul>
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
  //new task constructor to create our task object
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 1),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 3)
  ];
  selectedTask: Task = null;

  editTask(clickedTask: Task): void {
    this.selectedTask = clickedTask;
  }

  finishedEditing(): void {
    this.selectedTask = null;
  }

  isDone(clickedTask: Task) {
    if (clickedTask.done === true) {
      // alert("This task is done!");
    } else {
      // alert("This task is not done. Better get to work!");
    }
  }

  priorityColor(currentTask: Task): string {
    if (currentTask.priority === 1) {
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}


//class declaration is our MODEL which holds our data // CONSTRUCTOR
export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }

}
