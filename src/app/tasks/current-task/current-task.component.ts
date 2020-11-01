import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { StopTaskComponent } from './stop-task.component';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.css']
})
export class CurrentTaskComponent implements OnInit {
  secondsTimer: number;
  timerInterval: any;
  barMode: string;
  /*TODO: If the user go away of this view we have to cancell the current task */
  constructor(private dialog: MatDialog, private taskService: TasksService) { }

  ngOnInit(): void {
    this.secondsTimer = 0;
    this.setTimers();
    this.barMode = 'indeterminate';
  }


  setTimers(): void{
   this.timerInterval = setInterval(() => {
      this.addOneSecond();
    }, 1000 );
  }

  addOneSecond(): void{
    this.secondsTimer = this.secondsTimer + 1;
  }

  clickOnStop(): void{
      this.barMode = 'determinate';
      clearInterval(this.timerInterval);
      const dialogReference = this.dialog.open(StopTaskComponent, {data: {
        input: 'Choose wisely'
      }});
      dialogReference.afterClosed().subscribe(result => {
        if (result){
          this.taskService.completedTask(this.secondsTimer);
        }
        else{
          this.barMode = 'indeterminate';
          this.setTimers();
        }
      });
  }

  secondsToHour(secondsTimer: number): number{
    return secondsTimer / 3600;
  }

  secondsToMinutes(secondsTimer: number): number{
    return secondsTimer / 60;
  }

  }
