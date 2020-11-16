import * as fromAppActions from './app.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  loginFromFirebase$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAppActions.logInFromFirebase),
        tap(() => this.router.navigate(['/home']))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}

