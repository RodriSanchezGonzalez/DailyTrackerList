import { OnInit, Output } from '@angular/core';

import { AuthData } from '../models/auth-data-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;


  constructor(private router: Router) {
   }

   registerUser(authData: AuthData): void{
     this.user = {
      email: 'sanchez.gonzalez.rodri',
      userId: Math.round(Math.random() * 10000).toString()
    };
     this.authSuccesfully();
   }

   login(authData: AuthData): void{
    this.user = {
      email: 'sanchez.gonzalez.rodri',
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccesfully();
   }

   logout(): void{
    this.user = null;
    this.authChange.next(false);
    this.router.navigateByUrl('/login');
   }

   getUser(): User{
     return {...this.user};
   }

   isAuth(): boolean{
     return !!this.user;
   }

   authSuccesfully(): void{
    this.authChange.next(true);
    this.router.navigateByUrl('/tasks');
   }

}
