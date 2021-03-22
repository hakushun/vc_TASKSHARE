import { StepAction, steps } from 'redux-effects-steps';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { deleteUser, postUser, putUser } from '../../libs/db/crud';

export type Userdata = {
  id: string;
  username: string;
  createdAt: number;
  updatedAt: number;
};
type Users = {
  list: Userdata[];
  isLoading: boolean;
};
export type CreatePayload = {
  id: string;
  username: string;
};
export type UpdatePayload = {
  id: string;
  username: string;
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

export const getUsers = actionCreator<Userdata[]>('GET_USERS');

export const createActions = actionCreator.async<
  CreatePayload,
  undefined,
  Error
>('CREATE_USER');
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postUser(body), [
    (data) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<
  UpdatePayload,
  undefined,
  Error
>('UPDATE_USER');
export const update = (body: UpdatePayload): StepAction =>
  steps(updateActions.started(body), () => putUser(body), [
    (data) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

export const removeActions = actionCreator.async<
  RemovePayload,
  undefined,
  Error
>('REMOVE_USER');
export const remove = (body: RemovePayload): StepAction =>
  steps(removeActions.started(body), () => deleteUser(body), [
    (data) => removeActions.done({ params: body, result: data }),
    (error) => removeActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Users = { list: [], isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(getUsers, (state, payload) => ({
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

const getUsersList = (state: RootState) => state.resources.users.list;
const getProjectsList = (state: RootState) => state.resources.projects.list;
const getTasksList = (state: RootState) => state.resources.tasks.list;
const getProject = (state: RootState) => state.ui.project;
const getTask = (state: RootState) => state.ui.task;

export const selectUsers = createSelector([getUsersList], (users) => users);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.users.isLoading],
  (isLoading) => isLoading,
);

export const selectOwner = createSelector(
  [getUsersList, getProjectsList, getProject],
  (users, projects, project) => {
    const target = projects.find((prj) => prj.id === project.id);
    return users.find((user) => user.id === target?.ownerId);
  },
);

export const selectAssignUser = createSelector(
  [getUsersList, getTasksList, getTask],
  (users, tasks, task) => {
    const target = tasks.find((tsk) => tsk.id === task.id);
    return users.find((user) => user.id === target?.assignTo);
  },
);

export const selectUserCreateProject = createSelector(
  [getUsersList, getProjectsList, getProject],
  (users, projects, project) => {
    const target = projects.find((prj) => prj.id === project.id);
    return users.find((user) => user.id === target?.userId);
  },
);

export const selectUserCreateTask = createSelector(
  [getUsersList, getTasksList, getTask],
  (users, tasks, task) => {
    const target = tasks.find((tsk) => tsk.id === task.id);
    return users.find((user) => user.id === target?.userId);
  },
);

// 関数
export const getUsername = (users: Userdata[], id: string): string => {
  const user = users.find((usr) => usr.id === id);
  return user?.username || 'undefined';
};
