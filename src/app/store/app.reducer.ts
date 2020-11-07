import * as fromAppActions from './app.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export interface State{
  isLoadingLoginOrRegistration: boolean;
  isAuthenticated: boolean;
}

const initialState: State = {
  isLoadingLoginOrRegistration: false,
  isAuthenticated: false
};

export const appReducers = createReducer(
  initialState,
  on(fromAppActions.startLoadingLoginOrRegistration, state => ({...state, isLoadingLoginOrRegistration: true})),
  on(fromAppActions.loginOrRegistrationWithError, state => ({...state,
                                                            isLoadingLoginOrRegistration: false,
                                                            isAuthenticated: false})),
  on(fromAppActions.loginOrRegistrationSuccesfully, state => ({...state,
                                                               isLoadingLoginOrRegistration: false,
                                                               isAuthenticated: true})),
  on(fromAppActions.logInFromFirebase, state => ({...state,
                                                                isAuthenticated: true})),
  on(fromAppActions.logoutFromFirebase, state => ({...state,
                                                                isAuthenticated: false}))
);

export const selectGeneralState = (state: State) => state;

export const getIsLoadingLoginOrRegistration =
createSelector(
  selectGeneralState,
  (state: State) => state.isLoadingLoginOrRegistration
);


export const getIsAuthenticated =
createSelector(
  selectGeneralState,
  (state: State) => state.isAuthenticated
);

