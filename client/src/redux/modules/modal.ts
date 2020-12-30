import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { add as addActivity, edit as editActivity } from './activity';
import { add as addProject, edit as editProject } from './project';
import {
  createActions as createProjectActions,
  updateActions as updateProjectActions,
} from './projects';
import {
  createActions as createTaskActions,
  updateActions as updateTaskActions,
} from './tasks';
import {
  createActions as createActivityActions,
  updateActions as updateActivityActions,
} from './activities';
import { RootState } from './reducers';
import { add as addTask, edit as editTask } from './task';
import { removeActions } from './users';

const actionCreator = actionCreatorFactory();

export const toggleProjectForm = actionCreator<boolean>('TOGGLE_PROJECT_FORM');
export const toggleTaskForm = actionCreator<boolean>('TOGGLE_TASK_FORM');
export const toggleActivityForm = actionCreator<boolean>(
  'TOGGLE_ACTIVITY_FORM',
);
export const toggleDeleteForm = actionCreator<boolean>('TOGGLE_DELETE_FORM');
export const toggleResetPasswordForm = actionCreator<boolean>(
  'TOGGLE_RESET_PASSWORD_FORM',
);

const INITIAL_STATE: {
  projectForm: boolean;
  taskForm: boolean;
  activityForm: boolean;
  deleteForm: boolean;
  resetPasswordForm: boolean;
} = {
  projectForm: false,
  taskForm: false,
  activityForm: false,
  deleteForm: false,
  resetPasswordForm: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggleProjectForm, (state, payload) => ({
    ...state,
    projectForm: payload,
  }))
  .case(toggleTaskForm, (state, payload) => ({
    ...state,
    taskForm: payload,
  }))
  .case(toggleActivityForm, (state, payload) => ({
    ...state,
    activityForm: payload,
  }))
  .case(toggleDeleteForm, (state, payload) => ({
    ...state,
    deleteForm: payload,
  }))
  .case(removeActions.done, (state) => ({
    ...state,
    deleteForm: false,
  }))
  .case(toggleResetPasswordForm, (state, payload) => ({
    ...state,
    resetPasswordForm: payload,
  }))
  .case(addProject, (state) => ({
    ...state,
    projectForm: true,
  }))
  .case(editProject, (state) => ({
    ...state,
    projectForm: true,
  }))
  .case(addTask, (state) => ({
    ...state,
    taskForm: true,
  }))
  .case(editTask, (state) => ({
    ...state,
    taskForm: true,
  }))
  .case(addActivity, (state) => ({
    ...state,
    activityForm: true,
  }))
  .case(editActivity, (state) => ({
    ...state,
    activityForm: true,
  }))
  .case(createProjectActions.done, (state) => ({
    ...state,
    projectForm: false,
  }))
  .case(createTaskActions.done, (state) => ({
    ...state,
    taskForm: false,
  }))
  .case(createActivityActions.done, (state) => ({
    ...state,
    activityForm: false,
  }))
  .case(updateProjectActions.done, (state) => ({
    ...state,
    projectForm: false,
  }))
  .case(updateTaskActions.done, (state) => ({
    ...state,
    taskForm: false,
  }))
  .case(updateActivityActions.done, (state) => ({
    ...state,
    activityForm: false,
  }));

export default reducer;

export const selectProjectForm = createSelector(
  [(state: RootState) => state.ui.modal.projectForm],
  (projectForm) => projectForm,
);

export const selectTaskForm = createSelector(
  [(state: RootState) => state.ui.modal.taskForm],
  (taskForm) => taskForm,
);

export const selectActivityForm = createSelector(
  [(state: RootState) => state.ui.modal.activityForm],
  (activityForm) => activityForm,
);

export const selectDeleteForm = createSelector(
  [(state: RootState) => state.ui.modal.deleteForm],
  (deleteForm) => deleteForm,
);
export const selectResetPasswordForm = createSelector(
  [(state: RootState) => state.ui.modal.resetPasswordForm],
  (resetPasswordForm) => resetPasswordForm,
);
