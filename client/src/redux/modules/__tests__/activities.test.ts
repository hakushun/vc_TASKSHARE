/* eslint-disable no-undefined */
import steps from 'redux-effects-steps';
import configureMockStore from 'redux-mock-store';
import reducer, {
  create,
  createActions,
  getActivities,
  remove,
  removeActions,
  selectActivities,
  selectActivitiesRelatedProject,
  selectActivitiesRelatedTask,
  selectIsLoading,
  update,
  updateActions,
} from '../activities';
import * as module from '../../../libs/db/crud';

const mockStore = configureMockStore([steps]);

describe('Async actions: activities', () => {
  it('create: SUCCESS', async () => {
    const payload = { taskId: '', comment: '', userId: '' };
    jest.spyOn(module, 'postActivity').mockImplementationOnce(async () => {
      Promise.resolve();
    });
    const expectedActions = [
      createActions.started(payload),
      createActions.done({ params: payload, result: undefined }),
    ];
    const store = mockStore({});
    await store.dispatch(create(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // doesn't work as expected
  // it('create: FAILED', async () => {
  //   const payload = { taskId: '', comment: '', userId: '' };
  //   jest.spyOn(module, 'postActivity').mockImplementationOnce(async () => {
  //     Promise.reject();
  //   });
  //   const expectedActions = [
  //     createActions.started(payload),
  //     createActions.failed({
  //       params: payload,
  //       error: { name: 'error', message: 'something is wrong' },
  //     }),
  //   ];
  //   const store = mockStore({});
  //   await store.dispatch(create(payload));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  it('update: SUCCESS', async () => {
    const payload = {
      id: '',
      taskId: '',
      comment: '',
      userId: '',
      createdAt: 0,
      updatedAt: 0,
    };
    jest.spyOn(module, 'putActivity').mockImplementationOnce(async () => {
      Promise.resolve();
    });
    const expectedActions = [
      updateActions.started(payload),
      updateActions.done({ params: payload, result: undefined }),
    ];
    const store = mockStore({});
    await store.dispatch(update(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // doesn't work as expected
  // it('update: FAILED', async () => {
  //   const payload = { id: '', taskId: '', comment: '', userId: '', createdAt: 0, updatedAt: 0 };
  //   jest.spyOn(module, 'putActivity').mockImplementationOnce(async () => {
  //     Promise.reject();
  //   });
  //   const expectedActions = [
  //     updateActions.started(payload),
  //     updateActions.failed({
  //       params: payload,
  //       error: { name: 'error', message: 'something is wrong' },
  //     }),
  //   ];
  //   const store = mockStore({});
  //   await store.dispatch(update(payload));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  it('remove: SUCCESS', async () => {
    const payload = { id: '' };
    jest.spyOn(module, 'deleteActivity').mockImplementationOnce(async () => {
      Promise.resolve();
    });
    const expectedActions = [
      removeActions.started(payload),
      removeActions.done({ params: payload, result: undefined }),
    ];
    const store = mockStore({});
    await store.dispatch(remove(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // it('remove: FAILED', async () => {
  //   const payload = { id: '' };
  //   jest
  //     .spyOn(module, 'deleteActivity')
  //     .mockImplementationOnce(async () => {
  //       Promise.reject();
  //     });
  //   const expectedActions = [
  //     removeActions.started(payload),
  //     removeActions.failed({
  //       params: payload,
  //       error: { name: 'error', message: 'something is wrong' },
  //     }),
  //   ];
  //   const store = mockStore({});
  //   await store.dispatch(remove(payload));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});

describe('Reducer: activities', () => {
  const createPayload = { taskId: '', comment: '', userId: '' };
  const updatePayload = {
    id: '',
    taskId: '',
    comment: '',
    userId: '',
    createdAt: 0,
    updatedAt: 0,
  };
  const removePayload = { id: '' };
  const error = { name: 'error', message: 'something is wrong' };

  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      list: [],
      isLoading: false,
    });
  });

  it('Action: getActivities', () => {
    const activities = [
      {
        updatedAt: 1614055379767,
        comment: 'パワポ完成\n',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        createdAt: 1614055379767,
        id: 'c070MzHABS7MmvdaULwC',
        taskId: '5biodWSRHVB874NtTT05',
      },
    ];
    const action = getActivities(activities);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      list: activities,
      isLoading: false,
    });
  });

  it('Action: createActions.started', () => {
    const action = createActions.started(createPayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: true });
  });

  it('Action: createActions.done', () => {
    const action = createActions.done({
      params: createPayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: false });
  });

  it('Action: createActions.failed', () => {
    const action = createActions.failed({ params: createPayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: false });
  });

  it('Action: updateActions.started', () => {
    const action = updateActions.started(updatePayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: true });
  });

  it('Action: updateActions.done', () => {
    const action = updateActions.done({
      params: updatePayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: false });
  });

  it('Action: updateActions.failed', () => {
    const action = updateActions.failed({ params: updatePayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: false });
  });

  it('Action: removeActions.started', () => {
    const action = removeActions.started(removePayload);
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: true });
  });

  it('Action: removeActions.done', () => {
    const action = removeActions.done({
      params: removePayload,
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: false });
  });

  it('Action: removeActions.failed', () => {
    const action = removeActions.failed({ params: removePayload, error });
    const result = reducer(undefined, action);
    expect(result).toEqual({ list: [], isLoading: false });
  });
});

describe('Selector: activities', () => {
  const state = {
    ui: {
      project: {
        id: '5biodWSRHVB874NtTT06',
      },
      task: {
        id: '5biodWSRHVB874NtTT05',
      },
    },
    resources: {
      activities: {
        list: [
          {
            updatedAt: 1614055379767,
            comment: 'パワポ完成\n',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            createdAt: 1614055379767,
            id: 'c070MzHABS7MmvdaULwC',
            taskId: '5biodWSRHVB874NtTT05',
          },
          {
            updatedAt: 1614055379767,
            comment: 'テスト作成\n',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            createdAt: 1614055379767,
            id: 'c070MzHABS7MmvdaURE',
            projectId: '5biodWSRHVB874NtTT06',
          },
          {
            updatedAt: 1614055379767,
            comment: 'レビュー\n',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            createdAt: 1614055379767,
            id: 'c070MzHSHY7MmvdaULwC',
            taskId: '5biodWSRHVB874NtTT05',
          },
        ],
        isLoading: false,
      },
    },
  };
  it('selectActivities', () => {
    const result = state.resources.activities.list;
    expect(result).toEqual(selectActivities(state));
  });

  it('selectActivitiesRelatedProject', () => {
    const result = [
      {
        updatedAt: 1614055379767,
        comment: 'テスト作成\n',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        createdAt: 1614055379767,
        id: 'c070MzHABS7MmvdaURE',
        projectId: '5biodWSRHVB874NtTT06',
      },
    ];
    expect(result).toEqual(selectActivitiesRelatedProject(state));
  });

  it('selectActivitiesRelatedTask', () => {
    const result = [
      {
        updatedAt: 1614055379767,
        comment: 'パワポ完成\n',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        createdAt: 1614055379767,
        id: 'c070MzHABS7MmvdaULwC',
        taskId: '5biodWSRHVB874NtTT05',
      },
      {
        updatedAt: 1614055379767,
        comment: 'レビュー\n',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        createdAt: 1614055379767,
        id: 'c070MzHSHY7MmvdaULwC',
        taskId: '5biodWSRHVB874NtTT05',
      },
    ];
    expect(result).toEqual(selectActivitiesRelatedTask(state));
  });

  it('selectIsLoading', () => {
    const result = false;
    expect(result).toEqual(selectIsLoading(state));
  });
});
