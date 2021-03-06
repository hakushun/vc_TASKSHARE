import { StepAction, steps } from 'redux-effects-steps';
import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { deleteProject, postProject, putProject } from '../../libs/db/crud';
import { Project } from './project';
import { RootState } from './reducers';
import { sortProjectArray } from './sort';
import { getRelatedTasks } from './tasks';

export interface Projects {
  list: Project[];
  isLoading: boolean;
}
export type CreatePayload = {
  title: string;
  startDate: string;
  dueDate: string;
  ownerId: string;
  detail: string;
  userId: string;
};
export type UpdatePayload = {
  id: string;
  title: string;
  startDate: string;
  dueDate: string;
  ownerId: string;
  detail: string;
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

export const getProjects = actionCreator<Project[]>('GET_PROJECTS');

export const createActions = actionCreator.async<
  CreatePayload,
  undefined,
  Error
>('CREATE_PROJECT');
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postProject(body), [
    (data) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<
  UpdatePayload,
  undefined,
  Error
>('UPDATE_PROJECT');
export const update = (body: UpdatePayload): StepAction =>
  steps(updateActions.started(body), () => putProject(body), [
    (data) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

export const removeActions = actionCreator.async<
  RemovePayload,
  undefined,
  Error
>('REMOVE_PROJECT');
export const remove = (body: RemovePayload): StepAction =>
  steps(removeActions.started(body), () => deleteProject(body), [
    (data) => removeActions.done({ params: body, result: data }),
    (error) => removeActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Projects = { list: [], isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(getProjects, (state, payload) => ({
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

const getProjectsList = (state: RootState) => state.resources.projects.list;
const getTasksList = (state: RootState) => state.resources.tasks.list;
const getSortProjects = (state: RootState) => state.ui.sort.projects;
const getUser = (state: RootState) => state.ui.user;

export const selectProjects = createSelector(
  [getProjectsList],
  (projects) => projects,
);

export const selectOwnProjects = createSelector(
  [getProjectsList, getTasksList, getSortProjects, getUser],
  (projects, tasks, sortKey, user) =>
    sortProjectArray(projects, tasks, sortKey).filter((project) => {
      const relatedTasks = getRelatedTasks(tasks, project.id!);
      if (relatedTasks.length === 0) return true;
      return (
        relatedTasks.some((task) => task.status !== 'COMPLETE') &&
        project.ownerId === user.id
      );
    }),
);

export const selectOpenProjects = createSelector(
  [getProjectsList, getTasksList, getSortProjects],
  (projects, tasks, sortKey) =>
    sortProjectArray(projects, tasks, sortKey).filter((project) => {
      const relatedTasks = getRelatedTasks(tasks, project.id!);
      if (relatedTasks.length === 0) return true;
      return relatedTasks.some((task) => task.status !== 'COMPLETE');
    }),
);

export const selectCloseProjects = createSelector(
  [getProjectsList, getTasksList],
  (projects, tasks) =>
    projects.filter((project) => {
      const relatedTasks = getRelatedTasks(tasks, project.id!);
      if (relatedTasks.length === 0) return false;
      return relatedTasks.every((task) => task.status === 'COMPLETE');
    }),
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.projects.isLoading],
  (isLoading) => isLoading,
);
