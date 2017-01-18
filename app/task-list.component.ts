import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
    <li *ngFor="let currentTask of tasks" [class]="priorityColor(currentTask)"(click)="isDone(currentTask)" >{{currentTask.description}} <button class="btn btn-xs" (click)="editTask(currentTask)">Edit</button></li><!-- assigning li tag to a loop/repeater // button is called an event binding-->
  </ul>
  `
})


export class TaskListComponent {
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 1),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 3)
  ];


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
