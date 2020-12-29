import { StepAction, steps } from 'redux-effects-steps';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { deleteUser, postUser, putUser } from '../../libs/axios';

export type Userdata = {
  id: string;
  username: string;
  createdAt?: number;
  updatedAt?: number;
};
type Users = {
  list: Userdata[];
  isLoading: boolean;
};
export type UserPayload = {
  id: string;
  username: string;
};
export type RemovePayload = {
  id: string;
};
type Error = {
  name: string;
  message: string;
};
const actionCreator = actionCreatorFactory();

export const createActions = actionCreator.async<UserPayload, Userdata, Error>(
  'CREATE_USER',
);
export const create = (body: UserPayload): StepAction =>
  steps(createActions.started(body), () => postUser(body), [
    ({ data }) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<UserPayload, Userdata, Error>(
  'UPDATE_USER',
);
export const update = (body: UserPayload): StepAction =>
  steps(updateActions.started(body), () => putUser(body), [
    ({ data }) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

export const removeActions = actionCreator.async<
  RemovePayload,
  Userdata,
  Error
>('REMOVE_USER');
export const remove = (body: RemovePayload): StepAction =>
  steps(removeActions.started(body), () => deleteUser(body), [
    ({ data }) => removeActions.done({ params: body, result: data }),
    (error) => removeActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Users = { list: [], isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(createActions.started, (state) => ({ ...state, isLoading: true }))
  .case(createActions.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    list: [...state.list, result],
  }))
  .case(createActions.failed, (state) => ({ ...state, isLoading: false }))
  .case(updateActions.started, (state) => ({ ...state, isLoading: true }))
  .case(updateActions.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    list: [
      ...state.list.map((item) => {
        if (item.id === result.id) return result;
        return item;
      }),
    ],
  }))
  .case(updateActions.failed, (state) => ({ ...state, isLoading: false }))
  .case(removeActions.started, (state) => ({ ...state, isLoading: true }))
  .case(removeActions.done, (state, { result }) => ({
    ...state,
    isLoading: false,
    list: [...state.list.filter((item) => item.id !== result.id)],
  }))
  .case(removeActions.failed, (state) => ({ ...state, isLoading: false }));

export default reducer;

export const selectUsers = createSelector(
  [(state: RootState) => state.resources.users.list],
  (users) => users,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.users.isLoading],
  (isLoading) => isLoading,
);

export const selectOwner = createSelector(
  [
    (state: RootState) => state.resources.users.list,
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.ui.project,
  ],
  (users, projects, project) => {
    const target = projects.find((prj) => prj.id === project.id);
    return users.find((user) => user.id === target?.ownerId);
  },
);

export const selectAssignUser = createSelector(
  [
    (state: RootState) => state.resources.users.list,
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.task,
  ],
  (users, tasks, task) => {
    const target = tasks.find((tsk) => tsk.id === task.id);
    return users.find((user) => user.id === target?.assignTo);
  },
);

// 関数
export const getCommenter = (users: Userdata[], id: string): string => {
  const user = users.find((usr) => usr.id === id);
  return user?.username || 'undefined';
};
