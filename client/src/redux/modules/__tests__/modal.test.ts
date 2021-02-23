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
