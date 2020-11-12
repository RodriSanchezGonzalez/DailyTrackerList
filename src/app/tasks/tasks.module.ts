import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { CurrentTaskComponent } from './current-task/current-task.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgModule } from '@angular/core';
import { StopTaskComponent } from './current-task/stop-task.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [CompletedTasksComponent,
                CurrentTaskComponent,
                NewTaskComponent,
                TasksComponent,
                StopTaskComponent
              ],
  imports:     [CommonModule,
                AngularMaterialModule,
                ReactiveFormsModule,
                FormsModule,
                FlexLayoutModule,
                TasksRoutingModule
              ]
})

export class TasksModule{}
