import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h3>New Task</h3>
    <div>
      <label>Enter Task Description:</label>  <!-- !!!!!!!!!!!!!!!Question What if we want more then just description as in input value!!!!!!!!!!!-->
      <input #newDescription> <!-- By adding the template reference variable #newDescription to this field: <input #newDescription> we're instructing Angular to save the entire field, including any information the user inserts into it, into a newDescription variable. We can then retrieve the user input by calling newDescription.value -->
    </div>
    <div>
      <label>Task Priority:</label>
      <select #newPriority>
        <option [value]="1"> Low Priority </option>
        <option [value]="2"> Medium Priority </option>
        <option [value]="3"> High Priority </option>
      </select>
      <button (click)="submitForm(newDescription.value, newPriority.value); newDescription.value='';">Add</button><!-- grabs the values of the inputs and passes them to submitForm -->
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter(); //sends newTaskSender data up to root comp

  submitForm(description: string, priority: number): void { // Creates new task object with priority and description.. and emits the new task to the event emitter
    let newTaskToAdd: Task = new Task(description, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
