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
