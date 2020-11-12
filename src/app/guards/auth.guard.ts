import * as formAppReducer from '../store/app.reducer';

import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, map, skipWhile, take, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanLoad{

  constructor(  private router: Router,  private store: Store<formAppReducer.State>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


     return this.store.select(formAppReducer.getIsAuthenticated).pipe(skipWhile((value) => value === undefined),
                                                                      map( (value) => {
                                                                        if (value) {
                                                                          return true;
                                                                        }
                                                                        else {
                                                                          return false;
                                                                        }
                                                                      }),
                                                                      take(1));
  }

  canLoad(
    route: Route
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


     return this.store.select(formAppReducer.getIsAuthenticated).pipe(skipWhile((value) => value === undefined),
                                                                      map( (value) => {
                                                                        if (value) {
                                                                          return true;
                                                                        }
                                                                        else {
                                                                          return false;
                                                                        }
                                                                      }),
                                                                      take(1));
  }

}
