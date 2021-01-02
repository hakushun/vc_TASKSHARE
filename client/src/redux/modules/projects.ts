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
  dueDate: string;
  ownerId: string;
  detail: string;
  userId: string;
};
export type UpdatePayload = {
  id: string;
  title: string;
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

export const createActions = actionCreator.async<CreatePayload, Project, Error>(
  'CREATE_PROJECT',
);
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postProject(body), [
    (data) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<UpdatePayload, Project, Error>(
  'UPDATE_PROJECT',
);
export const update = (body: UpdatePayload): StepAction =>
  steps(updateActions.started(body), () => putProject(body), [
    (data) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

export const removeActions = actionCreator.async<
  RemovePayload,
  RemovePayload,
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

export const selectProjects = createSelector(
  [(state: RootState) => state.resources.projects.list],
  (projects) => projects,
);

export const selectOwnProjects = createSelector(
  [
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.sort.projects,
    (state: RootState) => state.ui.user,
  ],
  (projects, tasks, sortKey, user) =>
    sortProjectArray(projects, tasks, sortKey).filter(
      (project) => project.ownerId === user.id,
    ),
);

export const selectOpenProjects = createSelector(
  [
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.resources.tasks.list,
    (state: RootState) => state.ui.sort.projects,
  ],
  (projects, tasks, sortKey) =>
    sortProjectArray(projects, tasks, sortKey).filter((project) => {
      const relatedTasks = getRelatedTasks(tasks, project.id!);
      if (relatedTasks.length === 0) return true;
      return relatedTasks.some((task) => task.status !== 'COMPLETE');
    }),
);

export const selectCloseProjects = createSelector(
  [
    (state: RootState) => state.resources.projects.list,
    (state: RootState) => state.resources.tasks.list,
  ],
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
