import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { getStaringDate } from '../../libs/date';
import { RootState } from './reducers';
import { removeActions } from './tasks';

export type TaskStatus = 'NEW' | 'IN_PROGRESS' | 'REVIEWING' | 'COMPLETE';

export interface Task {
  id?: string;
  projectId: string;
  title: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
  userId?: string;
  assignTo: string;
  createdAt?: number;
  updatedAt?: number;
}
type FocusPayload = {
  id: string;
  projectId: string;
};
const actionCreator = actionCreatorFactory();

export const focus = actionCreator<FocusPayload>('FOCUS_TASK');
export const add = actionCreator<{ projectId: string } | null>('ADD_TASK');
export const edit = actionCreator<{ id: string }>('EDIT_TASK');

const INITIAL_STATE: Task = {
  projectId: '',
  title: '',
  dueDate: getStaringDate(new Date().getTime()),
  description: '',
  status: 'NEW',
  assignTo: '',
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(focus, (state, payload) => ({
    ...state,
    id: payload.id,
    projectId: payload.projectId,
  }))
  .case(add, (_state, payload) => {
    if (!payload) return { ...INITIAL_STATE };
    return {
      ...INITIAL_STATE,
      projectId: payload.projectId,
    };
  })
  .case(edit, (state, payload) => ({
    ...state,
    id: payload.id,
  }))
  .case(removeActions.done, () => ({
    ...INITIAL_STATE,
  }));

export default reducer;

export const selectTask = createSelector(
  [
    (state: RootState) => state.ui.task,
    (state: RootState) => state.resources.tasks.list,
  ],
  (task, tasks) => {
    const target = tasks.find((tsk) => tsk.id === task.id);
    if (!target) return { ...task };
    return target;
  },
);
