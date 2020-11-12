import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {path: '',  component: TasksComponent},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],

})
export class TasksRoutingModule { }
