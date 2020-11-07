import * as formAppReducer from '../store/app.reducer';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, map, take, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private router: Router,  private store: Store<formAppReducer.State>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.store.select(formAppReducer.getIsAuthenticated).pipe(filter(value => value !== undefined),
                                                                      map( value => {
                                                                        console.log(value);
                                                                        if (value) {
                                                                          console.log('Ha entrado');
                                                                          return true;
                                                                        }
                                                                        else {
                                                                          return false;
                                                                        }
                                                                      }),
                                                                      take(1));
  }

}
