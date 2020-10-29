import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { StopTaskComponent } from './stop-task.component';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.css']
})
export class CurrentTaskComponent implements OnInit {
  @Output() taskEnded = new EventEmitter();
  hoursTimer: number;
  minutesTimer: number;
  secondsTimer: number;
  timerInterval: any;
  barMode: string;

  constructor(private dialog: MatDialog) { }

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
          this.taskEnded.emit();
        }
        else{
          this.barMode = 'indeterminate';
          this.setTimers();
        }
      });
  }

  }
