import * as fromAppActions from './app.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

export interface State{
  userId: string;
  isLoadingLoginOrRegistration: boolean;
  isAuthenticated: boolean;
}

const initialState: State = {
    userId: null,
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
  on(fromAppActions.logInFromFirebase, (state, action ) => ({...state,
                                                                userId: action.userFirebaseId,
                                                                isAuthenticated: true})),
  on(fromAppActions.logoutFromFirebase, state => ({...state,
                                                                isAuthenticated: false}))
);

export const selectStore = (state) => state.state;

export const getIsLoadingLoginOrRegistration =
createSelector(selectStore, (state: State) => state.isLoadingLoginOrRegistration);

export const getIsAuthenticated =
createSelector(selectStore, (state: State) => state.isAuthenticated);

export const getUserId =
createSelector(selectStore, (state: State) => state.userId);

// Another and better way.

// export const selectGeneralState = createFeatureSelector<State>('state');
// export const getIsLoadingLoginOrRegistration =
// createSelector(
//   selectGeneralState,
//   (state: State) => state.isLoadingLoginOrRegistration
// );
// export const getIsAuthenticated =
// createSelector(
//   selectGeneralState,
//   (state: State) => state.isAuthenticated
// );

