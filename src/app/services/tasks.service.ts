import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Task } from '../models/task.model';
import { TypeTask } from '../models/task-types.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
//  private avaibleTasks: Task[] = [
//     { id: '0000000001', typeOf: 'Analysis', secondsDuration: 30000 ,  proyect: 'Task Tracker'},
//     { id: '0000000002', typeOf: 'Coding', secondsDuration: 60504 ,  proyect: 'Task Tracker'},
//     { id: '0000000003', typeOf: 'Testing', secondsDuration: 1002910 ,  proyect: 'Task Tracker'},
//     { id: '0000000004', typeOf: 'Architecture', secondsDuration: 60504 ,  proyect: 'Task Tracker'},
//     { id: '0000000005', typeOf: 'Deploy', secondsDuration: 787787 ,  proyect: 'Task Tracker'},
//     { id: '0000000006', typeOf: 'Testing', secondsDuration: 1002910 ,  proyect: 'Dating App'},
//   ];
  private completedTasks: Task[] = [];

  taskChanged = new Subject<Task>();

  private onGoingTask: Task;

  private avaibleTypesTasks: TypeTask[] = [
    {id: 1, typeTaks: 'Analysis'},
    {id: 2, typeTaks: 'Coding'},
    {id: 3, typeTaks: 'Testing'},
    {id: 4, typeTaks: 'Architecture'},
    {id: 5, typeTaks: 'Deploy'},
  ];

  constructor() { }

  getAvaibleTypeTasks(): TypeTask[]{
    return this.avaibleTypesTasks.slice();
  }

  startTask(createdTask: Task): void{
    this.onGoingTask = {...createdTask};
    this.taskChanged.next({...this.onGoingTask});
  }

  completedTask(secondsDuration: number): void{
    this.completedTasks.push({...this.onGoingTask,
                              finishDate: new Date(),
                              state : 'completed',
                              secondsDuration});
    this.onGoingTask = null;
    this.taskChanged.next(null);
  }

  cancellTask(secondsDuration: number): void{
    this.completedTasks.push({...this.onGoingTask,
      finishDate: new Date(),
      state : 'cancelled',
      secondsDuration});
    this.onGoingTask = null;
    this.taskChanged.next(null);
  }

  getOnGoingTask(): Task{
    return {...this.onGoingTask};
  }

  getCompletedTasks(): Task[]{
    return this.completedTasks.slice();
  }

}
