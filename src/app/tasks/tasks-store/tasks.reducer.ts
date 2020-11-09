import * as fromAppReducer from '../../store/app.reducer';
import * as fromTasksActions from './tasks.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

import { Task } from 'src/app/models/task.model';
import { TypeTask } from 'src/app/models/task-types.model';

export interface TasksState{
  availableTasks: TypeTask[];
  completedTasks: Task[];
  onGoingTask: Task;
}

// Workaround to lazy load modules merge the state
export interface State extends fromAppReducer.State{
  training: TasksState;
}

const initialState: TasksState = {
  availableTasks: [],
  completedTasks: [],
  onGoingTask: null
};


export const appReducers = createReducer(
  initialState,
  on(fromTasksActions.setAvaiableTasks,
     (state, {availableTasks}) => ({...state, availableTasks})),
  on(fromTasksActions.setCompletedTasks,
    (state, {completedTasks}) => ({...state, completedTasks})),
  on(fromTasksActions.startNewTraining,
    (state, {createdTask}) => ({...state, onGoingTask: createdTask})),
  on(fromTasksActions.stopOnGoingTraining, state => ({...state, onGoingTask: null})),

);

export const getTasksState = createFeatureSelector<TasksState>('tasks');

export const selectAvailableTasks = createSelector(
  getTasksState,
  (state: TasksState) => state.availableTasks
);
export const selectCompletedTasks = createSelector(
  getTasksState,
  (state: TasksState) => state.completedTasks
);
export const selectOnGoingTask = createSelector(
  getTasksState,
  (state: TasksState) => state.onGoingTask
);
export const selectIsOnGoingTask = createSelector(
  getTasksState,
  (state: TasksState) => state.onGoingTask !== null && state.onGoingTask !== undefined
);
