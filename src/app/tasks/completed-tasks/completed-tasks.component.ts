import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit , AfterViewInit, OnDestroy{
  completedTasks = new MatTableDataSource<Task>();
  displayedColumns: string[] = ['proyect', 'typeOf', 'secondsDuration', 'finishDate', 'state'];
  subscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.subscription = this.taskService.finishedTasks.subscribe(result => this.completedTasks.data = result);
    this.taskService.fetchCompletedTasks();
  }

  ngAfterViewInit(): void{
    this.completedTasks.sort = this.sort;
    this.completedTasks.paginator = this.paginator;
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
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
