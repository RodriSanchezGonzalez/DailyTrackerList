import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [  SignupComponent ],
  imports: [CommonModule,
           AuthRoutingModule,
            FormsModule,
             ReactiveFormsModule,
             AngularMaterialModule,
             FlexLayoutModule],
})
export class AuthModule {}
