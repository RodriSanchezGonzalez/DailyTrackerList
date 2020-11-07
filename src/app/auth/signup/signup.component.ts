import * as formAppReducer from '../../store/app.reducer';

import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  isLoadingRegistration: Observable<boolean>;

  constructor(private authService: AuthService,
              private store: Store<formAppReducer.State>) { }

  ngOnInit(): void {
    this.isLoadingRegistration = this.store.select(formAppReducer.getIsLoadingLoginOrRegistration);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  clickOnEnter(form: NgForm): void{
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
