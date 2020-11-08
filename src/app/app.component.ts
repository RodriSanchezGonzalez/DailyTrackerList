import * as formAppReducer from './store/app.reducer';

import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'daily-tasks-tracker';
  toggleSideNav: boolean;

  constructor(private authService: AuthService, private router: Router, private store: Store<formAppReducer.State>){}

  ngOnInit(): void{
    this.authService.initAuthListener();
    this.store.select(formAppReducer.getIsAuthenticated).subscribe(value => console.log(value));
  }

  onToggle(): void{
    this.toggleSideNav = !this.toggleSideNav;
  }

}
