import { StepAction, steps } from 'redux-effects-steps';
import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { deleteActivity, postActivity, putActivity } from '../../libs/db/crud';
import { Activity } from './activity';
import { RootState } from './reducers';

export interface Activities {
  list: Activity[];
  isLoading: boolean;
}
// projectId | taskIdのどっちか一方は必ず存在する
export type CreatePayload = {
  projectId?: string;
  taskId?: string;
  comment: string;
  userId: string;
};
export type UpdatePayload = {
  id: string;
  projectId?: string;
  taskId?: string;
  comment: string;
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

export const getActivities = actionCreator<Activity[]>('GET_ACTIVITIES');

export const createActions = actionCreator.async<
  CreatePayload,
  undefined,
  Error
>('CREATE_ACTIVITY');
export const create = (body: CreatePayload): StepAction =>
  steps(createActions.started(body), () => postActivity(body), [
    (data) => createActions.done({ params: body, result: data }),
    (error) => createActions.failed({ params: body, error }),
  ]);

export const updateActions = actionCreator.async<
  UpdatePayload,
  undefined,
  Error
>('UPDATE_ACTIVITY');
export const update = (body: UpdatePayload): StepAction =>
  steps(updateActions.started(body), () => putActivity(body), [
    (data) => updateActions.done({ params: body, result: data }),
    (error) => updateActions.failed({ params: body, error }),
  ]);

export const removeActions = actionCreator.async<
  RemovePayload,
  undefined,
  Error
>('REMOVE_ACTIVITY');
export const remove = (body: RemovePayload): StepAction =>
  steps(removeActions.started(body), () => deleteActivity(body), [
    (data) => removeActions.done({ params: body, result: data }),
    (error) => removeActions.failed({ params: body, error }),
  ]);

const INITIAL_STATE: Activities = { list: [], isLoading: false };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(getActivities, (state, payload) => ({
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

export const selectActivities = createSelector(
  [(state: RootState) => state.resources.activities.list],
  (activities) => activities,
);

export const selectActivitiesRelatedProject = createSelector(
  [
    (state: RootState) => state.resources.activities.list,
    (state: RootState) => state.ui.project,
  ],
  (activities, project) =>
    activities.filter((activity) => activity.projectId === project.id),
);

export const selectActivitiesRelatedTask = createSelector(
  [
    (state: RootState) => state.resources.activities.list,
    (state: RootState) => state.ui.task,
  ],
  (activities, task) =>
    activities.filter((activity) => activity.taskId === task.id),
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.resources.activities.isLoading],
  (isLoading) => isLoading,
);
