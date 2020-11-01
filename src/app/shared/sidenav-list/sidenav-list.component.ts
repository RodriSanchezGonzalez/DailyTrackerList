import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() toggle = new EventEmitter();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(): void{
    this.authSubscription.unsubscribe();
  }

  onToggle(): void{
    this.toggle.emit();
  }

}
