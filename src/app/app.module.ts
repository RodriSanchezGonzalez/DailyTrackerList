import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { CurrentTaskComponent } from './tasks/current-task/current-task.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
