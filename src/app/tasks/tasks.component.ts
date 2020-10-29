import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  onGoingTask: boolean;

  constructor() { }

  ngOnInit(): void {
    this.onGoingTask = false;
  }

  toggleOnGoinTask(): void{
    this.onGoingTask = !this.onGoingTask;
  }

}
