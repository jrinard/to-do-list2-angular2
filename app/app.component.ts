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
    <!-- [DataDown] (DataUp) -->
    <task-list [childTaskList]="masterTaskList" (editButtonSender)="editTask($event)"></task-list><!-- (editButtonSender)Transfer from child --> <!-- [childTaskList] Transfer from module down -->
    <hr>
    <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task> <!-- [childSelectedTask] goes down to edit-task --> <!-- doneButtonClickedSender came up from edit-task -->
    <new-task (newTaskSender)="addTask($event)"></new-task><!-- (newTaskSender)comes up from new-task-->
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

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 1),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 3)
  ];

  selectedTask: Task = null;

  editTask(clickedTask: Task): void { //called above
    this.selectedTask = clickedTask;
  }

  finishedEditing(): void { //called above
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }

}
