import { createAction, props } from '@ngrx/store';

export const startLoadingLoginOrRegistration = createAction(
  '[Login/Registration Component] Event: Click on log in'
);

export const loginOrRegistrationSuccesfully = createAction(
  '[Auth Service] Task: Log in/Registration succesfully'
);

export const loginOrRegistrationWithError = createAction(
  '[Auth Service] Task: Log in/Registration eror'
);

export const logInFromFirebase = createAction(
  '[Firebase Backend] Task: AuthState observable value has user'
);

export const logoutFromFirebase = createAction(
  '[Firebase Backend] Task: AuthState observable value has not user'
);
