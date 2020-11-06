import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { TypeTask } from 'src/app/models/task-types.model';
import { types } from 'util';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  proyect: string;


  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getAvailableTypesOfTasks();
  }

  clickStartNewTaks(form: NgForm ): void{
    this.tasksService.startTask({
      typeOf: form.value.tasksType,
      proyect:  form.value.proyect
    });
  }

}
