import { TypeTask } from './task-types.model';

export interface Task{
  id: string;
  typeOf: TypeTask;
  secondsDuration?: number;
  proyect?: string;
  finishDate?: Date;
  state?: 'completed'| 'cancelled' | null;
}
