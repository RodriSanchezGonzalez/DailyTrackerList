import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  creatingNewTask = new Subject<boolean>();

  private onGoingTask: Task;

  constructor( private firestoreDB: AngularFirestore,
               private snackBar: MatSnackBar) { }


  startTask(createdTask: Task): void{
    this.creatingNewTask.next(true);
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
      this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'});
    });
  }

  getAvailableTypesOfTasks(): void{
    /*TODO: Keep the subscription and unsubscribe on destroy*/
    this.firestoreDB.collection('availableTaskTypes')
    .valueChanges().subscribe((result: TypeTask[]) => {
      this.availableTasksTypes.next(result.slice());
    }, error => {
      this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'});
    });
  }

  private addDataToDatabase(task: Task): void{
      this.firestoreDB.collection('finishedTasks').add(task);
  }

}
