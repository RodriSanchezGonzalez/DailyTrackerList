import * as fromTasksReducer from '../tasks-store/tasks.reducer';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit , AfterViewInit{
  completedTasks = new MatTableDataSource<Task>();
  displayedColumns: string[] = ['proyect', 'typeOf', 'secondsDuration', 'finishDate', 'state'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private taskService: TasksService,
              private store: Store<fromTasksReducer.State>) { }

  ngOnInit(): void {
    this.taskService.fetchCompletedTasks();
    this.store.select(fromTasksReducer.selectCompletedTasks).subscribe(
      completedTasks => this.completedTasks.data = completedTasks);
  }

  ngAfterViewInit(): void{
    this.completedTasks.sort = this.sort;
    this.completedTasks.paginator = this.paginator;
  }

  secondsToHour(secondsTimer: number): number{
    return secondsTimer / 3600;
  }

  secondsToMinutes(secondsTimer: number): number{
    return secondsTimer / 60;
  }

  /*TODO: check why is not workinf with type I guess because its an object*/
  doFilter(filterValue: string): void {
    this.completedTasks.filter = filterValue.trim().toLowerCase();
  }


}
