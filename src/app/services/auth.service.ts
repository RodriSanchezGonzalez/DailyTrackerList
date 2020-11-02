import { OnInit, Output } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from '../models/auth-data-model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  private isAuthenticated = false;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private snackBar: MatSnackBar) {
   }

   registerUser(authData: AuthData): void{
     this.angularFireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
     .then(result => console.log(result))
     .catch(error =>
      this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'})
      );
   }

   login(authData: AuthData): void{
    this.angularFireAuth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => console.log(result))
    .catch(error =>  this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'}));
   }

   initAuthListener(): void{
     this.angularFireAuth.authState.subscribe(
       user => {
         if (user) {
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigateByUrl('/tasks');
         }
         else{
        this.isAuthenticated = true;
        this.user = null;
        this.authChange.next(false);
        this.router.navigateByUrl('/login');
         }
       });
   }

   logout(): void{
   /*TODO: Cancell subscriptions from task service to not get error from firebase auth*/
   this.angularFireAuth.signOut();
   }

   getUser(): User{
     return {...this.user};
   }

   isAuth(): boolean{
     return this.isAuthenticated;
   }


}
