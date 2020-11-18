import * as firebase from 'firebase/app';
import * as formActions from '../store/app.actions';
import * as formAppReducer from '../store/app.reducer';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from '../models/auth-data-model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private isAuthenticated = false;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private store: Store<formAppReducer.State>
               ) {
   }


   loginWithGmail(): void{
    this.angularFireAuth.signInWithPopup(
    new firebase.default.auth.GoogleAuthProvider())
    .then((result) => {
        this.router.navigate(['/home']);
    })
   .catch((error) => {
     window.alert(error);
   });
   }


   loginWithGithub(): void{
    this.angularFireAuth.signInWithPopup(
    new firebase.default.auth.GithubAuthProvider())
    .then((result) => {
        this.router.navigate(['/home']);
    })
   .catch((error) => {
     window.alert(error);
   });
   }

   registerUser(authData: AuthData): void{
    //  this.loadingLoginOrRegistration.next(true); REDUX NOW
    this.store.dispatch(formActions.startLoadingLoginOrRegistration());
    this.angularFireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => this.store.dispatch(formActions.loginOrRegistrationSuccesfully()))
    .catch(error => {
      this.store.dispatch(formActions.loginOrRegistrationWithError());
      this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'});
    } );
   }

   login(authData: AuthData): void{
    // this.loadingLoginOrRegistration.next(true);
    this.store.dispatch(formActions.startLoadingLoginOrRegistration());
    this.angularFireAuth.signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => this.store.dispatch(formActions.loginOrRegistrationSuccesfully()))
    .catch(error => {
      this.store.dispatch(formActions.loginOrRegistrationWithError());
      this.snackBar.open(error.message, null, {duration: 5000, verticalPosition: 'top'});
    } );
   }

  initAuthListener(): void{
     this.angularFireAuth.authState.subscribe(res => {
         if (res) {
         this.store.dispatch(formActions.logInFromFirebase({userFirebaseId: res.uid}));
         }
         else{
         this.store.dispatch(formActions.logoutFromFirebase());
         this.router.navigateByUrl('/home');
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
