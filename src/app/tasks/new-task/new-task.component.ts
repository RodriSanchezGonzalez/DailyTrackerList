import * as fromTasksReducer from '../tasks-store/tasks.reducer';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TasksService } from 'src/app/services/tasks.service';
import { TypeTask } from 'src/app/models/task-types.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  proyect: string;
  availableTypesOfTasks$: Observable<TypeTask[]>;

  constructor(public tasksService: TasksService, private store: Store<fromTasksReducer.State>) { }

  ngOnInit(): void {
    this.availableTypesOfTasks$ = this.store.select(fromTasksReducer.selectAvailableTasks);
    this.tasksService.getAvailableTypesOfTasks();
  }

  clickStartNewTaks(form: NgForm ): void{
    this.tasksService.startTask({
      typeOf: form.value.tasksType,
      proyect:  form.value.proyect
    });
  }

}
