import { createAction, props } from '@ngrx/store';

import { Task } from 'src/app/models/task.model';
import { TypeTask } from 'src/app/models/task-types.model';

export const setAvaiableTasks = createAction(
  '[Service Tasks] Task: Set available tasks',
  props<{availableTasks: TypeTask[]}>()
);

export const setCompletedTasks = createAction(
  '[Service Tasks] Task: Set completed tasks',
  props<{completedTasks: Task[]}>()
);

export const startNewTraining = createAction(
  '[NewTasks Component] Click: New task',
  props<{createdTask: Task}>()
);

export const stopOnGoingTraining = createAction(
  '[CurrentTask Component] Click: Stop'
);
