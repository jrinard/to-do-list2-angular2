import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)"><!-- on change grabs selected value -->
    <option value="allTasks">All Tasks</option>
    <option value="completedTasks">Completed Tasks</option>
    <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
  </select>

  <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
    <li *ngFor="let currentTask of (childTaskList | completeness:filterByCompleteness)" (click)="isDone(currentTask)" >{{currentTask.description}}
    <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
    <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/>
    <button class="btn btn-xs" (click)="editButtonHasBeenClicked(currentTask)">Edit</button> <!-- Edit Event Binding -->
    </li><!-- assigning li tag to a loop/repeater // button is called an event binding-->
  </ul>
  `
})


export class TaskListComponent {
  @Input() childTaskList: Task[];// Imported through input and used in *ngFor
  @Output() editButtonSender = new EventEmitter(); // task/object gets passed up to parent via .emit

  editButtonHasBeenClicked(taskToEdit: Task): void {// When button is clicked the object/task gets passed to taskToEdit. Then editButtonSender. runs emit to output task through the Event Emitter
    this.editButtonSender.emit(taskToEdit); // sending specific task to the parent using emit
  }


  isDone(clickedTask: Task): void {
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

  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu): void {
    this.filterByCompleteness = optionFromMenu;
  }

}
