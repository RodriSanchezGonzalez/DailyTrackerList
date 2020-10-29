import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Output() newTaskStarted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickStartNewTaks(): void{
    this.newTaskStarted.emit();
  }

}
