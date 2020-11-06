import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularMaterialModule } from './shared/angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { CurrentTaskComponent } from './tasks/current-task/current-task.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NgModule } from '@angular/core';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StopTaskComponent } from './tasks/current-task/stop-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './services/tasks.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    TasksComponent,
    HeaderComponent,
    SidenavListComponent,
    NewTaskComponent,
    CurrentTaskComponent,
    CompletedTasksComponent,
    StopTaskComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
