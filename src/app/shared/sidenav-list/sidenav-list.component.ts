import * as formAppReducer from '../../store/app.reducer';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  isAuth$: Observable<boolean>;

  constructor( private authService: AuthService, private store: Store<formAppReducer.State>) {
  }

  ngOnInit(): void {
    this.isAuth$ = this.store.select(formAppReducer.getIsAuthenticated);
  }

  onToggle(): void{
    this.toggle.emit();
  }

  clickOnLogout(): void{
    this.onToggle();
    this.authService.logout();
  }

}
