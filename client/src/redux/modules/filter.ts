import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { getStringDate } from '../../libs/date';
import { RootState } from './reducers';
import { Task } from './task';

export type StartedFilterValue = 'all' | 'notYet' | 'started';
export type DueDateFilterValue = 'all' | 'whitin3days' | 'today' | 'expired';

export type Filter = {
  started: StartedFilterValue;
  dueDate: DueDateFilterValue;
  complete: boolean;
};

type ChageFilterPayload =
  | {
      started: StartedFilterValue;
    }
  | {
      dueDate: DueDateFilterValue;
    }
  | {
      complete: boolean;
    };
const actionCreator = actionCreatorFactory();

export const change = actionCreator<ChageFilterPayload>('CHANGE_FILTER');

const INITIAL_STATE: Filter = {
  started: 'all',
  dueDate: 'all',
  complete: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  change,
  (state, payload) => ({
    ...state,
    ...payload,
  }),
);

export default reducer;

export const selectFilter = createSelector(
  [(state: RootState) => state.ui.filter],
  (filter) => filter,
);

export const filterTasks = (fileter: Filter, tasks: Task[]): Task[] => {
  let filteredTasks = tasks;
  const threeDaysMilisec = 3 * 24 * 60 * 60 * 1000;

  switch (fileter.started) {
    case 'all':
      break;
    case 'notYet':
      filteredTasks = filteredTasks.filter(
        (task) => task.startDate > getStringDate(new Date().getTime()),
      );
      break;
    case 'started':
      filteredTasks = filteredTasks.filter(
        (task) => task.startDate <= getStringDate(new Date().getTime()),
      );
      break;
    default:
      break;
  }

  switch (fileter.dueDate) {
    case 'all':
      break;
    case 'whitin3days':
      filteredTasks = filteredTasks.filter(
        (task) =>
          task.dueDate <=
          getStringDate(new Date().getTime() + threeDaysMilisec),
      );
      break;
    case 'today':
      filteredTasks = filteredTasks.filter(
        (task) => task.dueDate === getStringDate(new Date().getTime()),
      );
      break;
    case 'expired':
      filteredTasks = filteredTasks.filter(
        (task) => task.dueDate < getStringDate(new Date().getTime()),
      );
      break;
    default:
      break;
  }

  return filteredTasks;
};
