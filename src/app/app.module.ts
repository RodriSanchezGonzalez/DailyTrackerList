import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { CurrentTaskComponent } from './tasks/current-task/current-task.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NgModule } from '@angular/core';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StopTaskComponent } from './tasks/current-task/stop-task.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TasksComponent,
    CurrentTaskComponent,
    NewTaskComponent,
    CompletedTasksComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTaskComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
