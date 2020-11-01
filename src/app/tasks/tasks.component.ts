import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  onGoingTask: boolean;
  exerciseSubscription: Subscription;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.onGoingTask = false;
    this.exerciseSubscription = this.tasksService.taskChanged.subscribe(task => {
      if (task){
        this.onGoingTask = true;
      } else{
        this.onGoingTask = false;
      }
    });
  }

  toggleOnGoinTask(): void{
    this.onGoingTask = !this.onGoingTask;
  }

}
