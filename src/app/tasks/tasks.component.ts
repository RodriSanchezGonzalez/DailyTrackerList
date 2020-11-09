import * as fromTasksReducer from './tasks-store/tasks.reducer';

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  onGoingTask$: Observable<boolean>;


  constructor(private store: Store<fromTasksReducer.State>) { }

  ngOnInit(): void {
    this.onGoingTask$ = this.store.select(fromTasksReducer.selectIsOnGoingTask);
    this.onGoingTask$.subscribe(valor => console.log(valor));
  }



}
