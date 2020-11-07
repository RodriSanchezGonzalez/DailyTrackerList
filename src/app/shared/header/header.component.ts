import * as formAppReducer from '../../store/app.reducer';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  isAuth: Observable<boolean>;

  constructor(private authService: AuthService, private store: Store<formAppReducer.State>) { }

  ngOnInit(): void {
   this.isAuth = this.store.select(formAppReducer.getIsAuthenticated);
  }

  onToggle(): void{
    this.toggle.emit();
  }

  clickOnLogout(): void{
    this.authService.logout();
  }

}
