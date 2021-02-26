/* eslint-disable no-undefined */
import reducer, {
  emitError,
  selectDialog,
  selectDialogMessage,
  toggle,
} from '../dialog';
import {
  createActions as createUserActions,
  removeActions as removeUserActions,
  updateActions as updateUserActions,
} from '../users';
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

describe('Reducer: dialog', () => {
  const error: Error = { name: 'error', message: 'something is wrong' };

  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      isOpened: false,
      message: {
        title: '',
        description: '',
      },
    });
  });

  it('Action: toggle', () => {
    const action = toggle();
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: '',
        description: '',
      },
    });
  });

  it('Action: emitError', () => {
    const action = emitError({ title: 'title', description: 'description' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'title',
        description: 'description',
      },
    });
  });

  it('Action: createUserActions.failed', () => {
    const action = createUserActions.failed({
      params: { id: 'xxx1234XXX', username: 'sample' },
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('Action: removeUserActions.failed', () => {
    const action = removeUserActions.failed({
      params: { id: 'xxx1234XXX' },
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('Action: updateUserActions.failed', () => {
    const action = updateUserActions.failed({
      params: {
        id: 'xxx1234XXX',
        username: 'sample',
        createdAt: 0,
        updatedAt: 0,
      },
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('createProjectActions.failed', () => {
    const action = createProjectActions.failed({
      params: {
        title: '',
        startDate: '',
        dueDate: '',
        ownerId: '',
        detail: '',
        userId: '',
      },
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('updateProjectActions.failed', () => {
    const action = updateProjectActions.failed({
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
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('removeProjectActions.failed', () => {
    const action = removeProjectActions.failed({ params: { id: '' }, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('createTaskActions.failed', () => {
    const action = createTaskActions.failed({
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
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('updateTaskActions.failed', () => {
    const action = updateTaskActions.failed({
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
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('removeTaskActions.failed', () => {
    const action = removeTaskActions.failed({ params: { id: '' }, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('createActivityActions.failed', () => {
    const action = createActivityActions.failed({
      params: {
        taskId: '',
        comment: '',
        userId: '',
      },
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('updateActivityActions.failed', () => {
    const action = updateActivityActions.failed({
      params: {
        id: '',
        taskId: '',
        comment: '',
        userId: '',
        createdAt: 0,
        updatedAt: 0,
      },
      error,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });

  it('removeActivityActions.failed', () => {
    const action = removeActivityActions.failed({ params: { id: '' }, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isOpened: true,
      message: {
        title: 'error',
        description: 'something is wrong',
      },
    });
  });
});

describe('Selector: dialog', () => {
  const state = {
    ui: {
      dialog: {
        isOpened: true,
        message: {
          title: 'title',
          description: 'description',
        },
      },
    },
  };
  it('selectDialog', () => {
    const result = true;
    expect(result).toEqual(selectDialog(state));
  });

  it('selectDialogMessage', () => {
    const result = { title: 'title', description: 'description' };
    expect(result).toEqual(selectDialogMessage(state));
  });
});
