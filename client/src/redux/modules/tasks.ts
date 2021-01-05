import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { StepAction, steps } from 'redux-effects-steps';
import { Task, TaskStatus } from './task';
import { RootState } from './reducers';
import { sortTaskArray } from './sort';
import { deleteTask, postTask, putTask } from '../../libs/db/crud';
import { filterTasks } from './filter';

export interface Tasks {
  list: Task[];
  isLoading: boolean;
}
export type CreatePayload = {
  projectId: string;
  title: string;
  assignTo: string;
  startDate: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
  userId: string;
};
export type UpdatePayload = {
  id: string;
  projectId: string;
  title: string;
  assignTo: string;
  startDate: string;
  dueDate: string;
  description: string;
  status: TaskStatus;
  userId: string;
  createdAt: number;
  updatedAt: number;
};
export type RemovePayload = {
  id: string;
};
type Error = {
  name: string;
  message: string;
};
const actionCreator = actionCreatorFactory();

export const getTasks = actionCreator<Task[]>('GET_TASKS');

export const createActions = actionCreator.async<
  CreatePayload,
  undefined,
  Error
>('CREATE_TASK');
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postTask(body), [
    (data) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<
  UpdatePayload,
  undefined,
  Error
>('UPDATE_TASK');
export const update = (body: UpdatePayload): StepAction =>
  steps(updateActions.started(body), () => putTask(body), [
    (data) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

export const removeActions = actionCreator.async<
  RemovePayload,
  undefined,
  Error
>('REMOVE_TASK');
export const remove = (body: RemovePayload): StepAction =>
  steps(removeActions.started(body), () => deleteTask(body), [
    (data) => removeActions.done({ params: body, result: data }),
    (error) => removeActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Tasks = { list: [], isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(getTasks, (state, payload) => ({
    ...state,
    list: [...payload],
  }))
  .case(createActions.started, (state) => ({ ...state, isLoading: true }))
  .case(createActions.done, (state) => ({
    ...state,
    isLoading: false,
  }))
  .case(createActions.failed, (state) => ({ ...state, isLoading: false }))
  .case(updateActions.started, (state) => ({ ...state, isLoading: true }))
  .case(updateActions.done, (state) => ({
    ...state,
    isLoading: false,
  }))
  .case(updateActions.failed, (state) => ({ ...state, isLoading: false }))
  .case(removeActions.started, (state) => ({ ...state, isLoading: true }))
  .case(removeActions.done, (state) => ({
    ...state,
    isLoading: false,
  }))
  .case(removeActions.failed, (state) => ({ ...state, isLoading: false }));

export default reducer;

export const selectTasks = createSelector(
  [(state: RootState) => state.resources.tasks.list],
  (tasks) => tasks,
);

export const selectAssignedTasks = createSelector(
  [
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.sort.tasks,
    (state: RootState) => state.ui.filter,
    (state: RootState) => state.ui.user,
  ],
  (tasks, sortKey, filter, user) => {
    const filteredTasks = filterTasks(filter, tasks);
    return sortTaskArray(filteredTasks, sortKey).filter(
      (task) => task.assignTo === user.id && task.status !== 'COMPLETE',
    );
  },
);

export const selectOpenTasks = createSelector(
  [
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.sort.tasks,
    (state: RootState) => state.ui.filter,
  ],
  (tasks, sortKey, filter) => {
    const filteredTasks = filterTasks(filter, tasks);
    return sortTaskArray(
      filteredTasks.filter((task) => task.status !== 'COMPLETE'),
      sortKey,
    );
  },
);

export const selectCloseTasks = createSelector(
  [(state: RootState) => state.resources.tasks.list],
  (tasks) => tasks.filter((task) => task.status === 'COMPLETE'),
);

export const selectRelatedTasks = createSelector(
  [
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.project,
    (state: RootState) => state.ui.sort.tasks,
    (state: RootState) => state.ui.filter.complete,
  ],
  (tasks, project, sortKey, complete) => {
    const filteredTasks = complete
      ? tasks
      : tasks.filter((task) => task.status !== 'COMPLETE');
    return sortTaskArray(
      filteredTasks.filter((task) => task.projectId === project.id),
      sortKey,
    );
  },
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.tasks.isLoading],
  (isLoading) => isLoading,
);

// 関数
export const getRelatedTasks = (tasks: Task[], projectId: string): Task[] =>
  tasks.filter((task) => task.projectId === projectId);

export const getOpenTasks = (tasks: Task[]): Task[] =>
  tasks.filter((task) => task.status !== 'COMPLETE');

export const countOpenRelatedTasks = (
  tasks: Task[],
  projectId: string,
): number => {
  const relatedTasks = getRelatedTasks(tasks, projectId);
  const openRelatedTasks = getOpenTasks(relatedTasks);
  return openRelatedTasks.length;
};

export const calculateProgress = (tasks: Task[], projectId: string): number => {
  const relatedTasks = getRelatedTasks(tasks, projectId);
  if (relatedTasks.length === 0) return 0;
  const openRelatedTasks = getOpenTasks(relatedTasks);
  return Math.round(
    ((relatedTasks.length - openRelatedTasks.length) / relatedTasks.length) *
      100,
  );
};
