//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // decorator defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
   <h3>{{currentFocus}}</h3>
   <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
     <li (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button class="btn btn-xs" (click)="editTask()">Edit</button></li><!-- assigning li tag to a loop/repeater // button is called an event binding-->
   </ul>
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
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];

  editTask() {
    alert("works");
  }

  isDone(clickedTask: Task) {
    if (clickedTask.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!");
    }
  }

}


//class declaration is our MODEL which holds our data // CONSTRUCTOR
export class Task {
  public done: boolean = false;
  constructor(public description: string) { }

}
