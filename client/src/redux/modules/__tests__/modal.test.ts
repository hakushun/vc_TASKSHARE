/* eslint-disable no-undefined */
import reducer, {
  selectActivityForm,
  selectConfirmation,
  selectDeleteForm,
  selectProjectForm,
  selectResetPasswordForm,
  selectTaskForm,
  toggleActivityForm,
  toggleConfirmation,
  toggleDeleteForm,
  toggleProjectForm,
  toggleResetPasswordForm,
  toggleTaskForm,
} from '../modal';
import { add as addProject, edit as editProject } from '../project';
import { add as addTask, edit as editTask } from '../task';
import { add as addActivity, edit as editActivity } from '../activity';
import {
  createActions as createProjectActions,
  updateActions as updateProjectActions,
  removeActions as removeProjectActions,
} from '../projects';
import {
  createActions as createTaskActions,
  updateActions as updateTaskActions,
  removeActions as removeTaskActions,
} from '../tasks';
import {
  createActions as createActivityActions,
  updateActions as updateActivityActions,
  removeActions as removeActivityActions,
} from '../activities';
import {
  removeActions as removeUserActions,
} from '../users';

describe('Reducer: modal', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: toggleProjectForm', () => {
    const action = toggleProjectForm(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: true,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: toggleTaskForm', () => {
    const action = toggleTaskForm(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: true,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: toggleActivityForm', () => {
    const action = toggleActivityForm(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: true,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: toggleDeleteForm', () => {
    const action = toggleDeleteForm(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: true,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: toggleResetPasswordForm', () => {
    const action = toggleResetPasswordForm(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: true,
      confirmation: false,
    });
  });

  it('Action: toggleConfirmation', () => {
    const action = toggleConfirmation(true);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: true,
    });
  });

  it('Action: addProject', () => {
    const action = addProject({ userId: '' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: true,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: editProject', () => {
    const action = editProject({ id: '' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: true,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: addTask', () => {
    const action = addTask({ userId: '' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: true,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: editTask', () => {
    const action = editTask({ id: '' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: true,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: addActivity', () => {
    const action = addActivity({ taskId: '', userId: '' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: true,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: editActivity', () => {
    const action = editActivity({ id: '' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: true,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: createProjectActions.done', () => {
    const action = createProjectActions.done({
      params: {
        title: '',
        startDate: '',
        dueDate: '',
        ownerId: '',
        detail: '',
        userId: '',
      },
      result: {
        title: '',
        ownerId: '',
        startDate: '',
        dueDate: '',
        detail: '',
      },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: updateProjectActions.done', () => {
    const action = updateProjectActions.done({
      params: {
        id: '',
        title: '',
        startDate: '',
        dueDate: '',
        ownerId: '',
        detail: '',
        userId: '',
        createdAt: 0,
        updatedAt: 0,
      },
      result: {
        title: '',
        ownerId: '',
        startDate: '',
        dueDate: '',
        detail: '',
      },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: removeProjectActions.done', () => {
    const action = removeProjectActions.done({
      params: {
        id: '',
      },
      result: {
        id: '',
      },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: createTaskActions.done', () => {
    const action = createTaskActions.done({
      params: {
        projectId: '',
        title: '',
        assignTo: '',
        startDate: '',
        dueDate: '',
        description: '',
        status: 'NEW',
        userId: '',
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: updateTaskActions.done', () => {
    const action = updateTaskActions.done({
      params: {
        id: '',
        projectId: '',
        title: '',
        assignTo: '',
        startDate: '',
        dueDate: '',
        description: '',
        status: 'NEW',
        userId: '',
        createdAt: 0,
        updatedAt: 0,
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: removeTaskActions.done', () => {
    const action = removeTaskActions.done({
      params: {
        id: '',
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: createActivityActions.done', () => {
    const action = createActivityActions.done({
      params: {
        taskId: '',
        comment: '',
        userId: '',
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: updateActivityActions.done', () => {
    const action = updateActivityActions.done({
      params: {
        id: '',
        taskId: '',
        comment: '',
        userId: '',
        createdAt: 0,
        updatedAt: 0,
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: removeActivityActions.done', () => {
    const action = removeActivityActions.done({
      params: {
        id: '',
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });

  it('Action: removeUserActions.done', () => {
    const action = removeUserActions.done({
      params: {
        id: '',
      },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectForm: false,
      taskForm: false,
      activityForm: false,
      deleteForm: false,
      resetPasswordForm: false,
      confirmation: false,
    });
  });
});

describe('Selector: modal', () => {
  const state = {
    ui: {
      modal: {
        projectForm: true,
        taskForm: true,
        activityForm: true,
        deleteForm: true,
        resetPasswordForm: true,
        confirmation: true,
      },
    },
  };

  it('selectProjectForm', () => {
    const result = true;
    expect(result).toEqual(selectProjectForm(state));
  });

  it('selectTaskForm', () => {
    const result = true;
    expect(result).toEqual(selectTaskForm(state));
  });

  it('selectActivityForm', () => {
    const result = true;
    expect(result).toEqual(selectActivityForm(state));
  });

  it('selectDeleteForm', () => {
    const result = true;
    expect(result).toEqual(selectDeleteForm(state));
  });

  it('selectResetPasswordForm', () => {
    const result = true;
    expect(result).toEqual(selectResetPasswordForm(state));
  });

  it('selectConfirmation', () => {
    const result = true;
    expect(result).toEqual(selectConfirmation(state));
  });
});
