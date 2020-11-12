import * as fromAppReducer from './store/app.reducer';
import * as fromTasksReducer from './tasks/tasks-store/tasks.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularMaterialModule } from './shared/angular-material.module';
import { AppComponent } from './app.component';
import { AppEffects } from './store/app.effects';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { CurrentTaskComponent } from './tasks/current-task/current-task.component';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NgModule } from '@angular/core';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { StopTaskComponent } from './tasks/current-task/stop-task.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './services/tasks.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
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
    StoreModule.forRoot({state: fromAppReducer.appReducers}),
    StoreModule.forFeature('tasks', fromTasksReducer.appReducers),
    StoreDevtoolsModule.instrument({
     maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AuthService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
