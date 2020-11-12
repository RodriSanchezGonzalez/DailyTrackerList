import * as fromAppReducer from '../store/app.reducer';
import * as fromTasksActions from '../tasks/tasks-store/tasks.actions';
import * as fromTasksReducer from '../tasks/tasks-store/tasks.reducer';

import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';
import { TypeTask } from '../models/task-types.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private firestoreDB: AngularFirestore,
               private snackBar: MatSnackBar,
               private store: Store<fromTasksReducer.State>) { }


  startTask(createdTask: Task): void{
   this.store.dispatch(fromTasksActions.startNewTraining({createdTask: {...createdTask}}));
  }

  completedTask(secondsDuration: number): void{
    this.store.select(fromTasksReducer.selectOnGoingTask).pipe(take(1)).subscribe(task => {
      this.addDataToDatabase({...task,
                                finishDate: new Date(),
                                state : 'completed',
                                secondsDuration});
      this.store.dispatch(fromTasksActions.stopOnGoingTraining());
    });
  }

  // TODO: Add bottom to cancell onGoingTask
  cancelledTask(secondsDuration: number): void{
    this.store.select(fromTasksReducer.selectOnGoingTask).pipe(take(1)).subscribe(task => {
      this.addDataToDatabase({...task,
                                finishDate: new Date(),
                                state : 'cancelled',
                                secondsDuration});
      this.store.dispatch(fromTasksActions.stopOnGoingTraining());
    });
  }


  fetchCompletedTasks(): void{
    this.firestoreDB.collection('finishedTasks').valueChanges()
    .subscribe((result: any[]) => {
      this.store.select(fromAppReducer.getUserId).pipe(take(1)).subscribe( userId => {
      this.store.dispatch(fromTasksActions.setCompletedTasks({completedTasks:
                                                              result.filter(task => task?.userId === userId).slice()}));
      }, error => {
        this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'});
      });
    });
  }


  getAvailableTypesOfTasks(): void{
    /*TODO: Keep the subscription and unsubscribe on destroy*/
    this.firestoreDB.collection('availableTaskTypes')
    .valueChanges().subscribe((result: TypeTask[]) => {
      this.store.dispatch(fromTasksActions.setAvaiableTasks({availableTasks: result.slice()}));
    }, error => {
      this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'});
    });
  }

  private addDataToDatabase(task: Task): void{
    this.store.select(fromAppReducer.getUserId).pipe(take(1)).subscribe( userId =>
      this.firestoreDB.collection('finishedTasks').add({...task, userId})
    );
  }

}
