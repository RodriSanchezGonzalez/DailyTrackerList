import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggle = new EventEmitter();
  authSubscription: Subscription;
  isAuth: boolean;

  constructor(private authService: AuthService) { }

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

  clickOnLogout(): void{
    this.authService.logout();
  }

}
