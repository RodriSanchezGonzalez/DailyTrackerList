import { AngularFirestore } from '@angular/fire/firestore';
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


  taskChanged = new Subject<Task>();
  availableTasksTypes = new Subject<TypeTask[]>();
  finishedTasks = new Subject<Task[]>();

  private onGoingTask: Task;

  constructor( private firestoreDB: AngularFirestore) { }


  startTask(createdTask: Task): void{
    this.onGoingTask = {...createdTask};
    this.taskChanged.next({...this.onGoingTask});
  }

  completedTask(secondsDuration: number): void{
    this.addDataToDatabase({...this.onGoingTask,
                              finishDate: new Date(),
                              state : 'completed',
                              secondsDuration});
    this.onGoingTask = null;
    this.taskChanged.next(null);
  }

  cancellTask(secondsDuration: number): void{
    this.addDataToDatabase({...this.onGoingTask,
      finishDate: new Date(),
      state : 'cancelled',
      secondsDuration});
    this.onGoingTask = null;
    this.taskChanged.next(null);
  }

  getOnGoingTask(): Task{
    return {...this.onGoingTask};
  }

  fetchCompletedTasks(): void{
    this.firestoreDB.collection('finishedTasks').valueChanges()
    .subscribe((result: Task[]) => {
      this.finishedTasks.next(result);
     }
     , error => {
      console.log(error);
    });
  }

  getAvailableTypesOfTasks(): void{
    /*TODO: Keep the subscription and unsubscribe on destroy*/
    this.firestoreDB.collection('availableTaskTypes')
    .valueChanges().subscribe((result: TypeTask[]) => {
      this.availableTasksTypes.next(result.slice());
    }, error => {
      console.log(error);
    });
  }

  private addDataToDatabase(task: Task): void{
      this.firestoreDB.collection('finishedTasks').add(task);
  }

}
