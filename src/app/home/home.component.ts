import * as formAppReducer from '../store/app.reducer';

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuth$: Observable<boolean>;

  constructor( private store: Store<formAppReducer.State>) { }

  ngOnInit(): void {
    this.isAuth$ = this.store.select(formAppReducer.getIsAuthenticated);
   }

}
