import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';


@Pipe({ //Decorator
  name: "completeness",
  pure: false //tells Angular to check if output has changed more often, causing it to update as soon as we change something about a Task, not only when the menu option changes.
})

export class CompletenessPipe implements PipeTransform { //CompletenessPipe class must implement all properties or methods outlined in Angular's PipeTransform interface.
  transform(input: Task[], desiredCompleteness) { // Pipetransform must contain Tranform //array of objects to be transformed (or filtered
    let output: Task[] = [];
    if (desiredCompleteness === "incompleteTasks") {
      for (let i = 0; i < input.length; i++) { // filtering incomplete tasks and pushing to output
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedTasks") {
      for (let i = 0; i < input.length; i++) { // filtering incomplete tasks and pushing to output
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
