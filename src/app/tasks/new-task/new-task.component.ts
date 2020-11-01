import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { TypeTask } from 'src/app/models/task-types.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  proyect: string;
  typesOfTaks: TypeTask[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.typesOfTaks = this.tasksService.getAvaibleTypeTasks();
  }

  clickStartNewTaks(form: NgForm ): void{
    this.tasksService.startTask({
      id:  new Date().toString() + form.value.tasksType,
      typeOf: this.typesOfTaks.find(type => type.id === form.value.tasksType),
      proyect:  form.value.proyect
    });
  }

}
