import { TypeTask } from './task-types.model';

export interface Task{
  typeOf: TypeTask;
  secondsDuration?: number;
  proyect?: string;
  finishDate?: Date;
  state?: 'completed'| 'cancelled' | null;
}
