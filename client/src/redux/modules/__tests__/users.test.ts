/* eslint-disable no-undefined */
import steps from 'redux-effects-steps';
import configureMockStore from 'redux-mock-store';
import * as module from '../../../libs/db/crud';
import reducer, {
  create,
  createActions,
  getUsers,
  remove,
  removeActions,
  selectAssignUser,
  selectIsLoading,
  selectOwner,
  selectUserCreateProject,
  selectUserCreateTask,
  selectUsers,
  update,
  updateActions,
} from '../users';

const mockStore = configureMockStore([steps]);

const createPayload = {
  id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  username: 'Shun',
};
const updatePayload = {
  updatedAt: 1609737325723,
  id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  username: 'Shun',
  createdAt: 1609226313258,
};
const removePayload = {
  id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
};
const error = { name: 'error', message: 'something is wrong' };

describe('Async actions: users', () => {
  it('create: SUCCESS', async () => {
    jest.spyOn(module, 'postUser').mockImplementationOnce(async () => {
      Promise.resolve();
    });
    const expectedActions = [
      createActions.started(createPayload),
      createActions.done({ params: createPayload, result: undefined }),
    ];
    const store = mockStore({});
    await store.dispatch(create(createPayload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('update: SUCCESS', async () => {
    jest.spyOn(module, 'putUser').mockImplementationOnce(async () => {
      Promise.resolve();
    });
    const expectedActions = [
      updateActions.started(updatePayload),
      updateActions.done({ params: updatePayload, result: undefined }),
    ];
    const store = mockStore({});
    await store.dispatch(update(updatePayload));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('remove: SUCCESS', async () => {
    jest.spyOn(module, 'deleteUser').mockImplementationOnce(async () => {
      Promise.resolve();
    });
    const expectedActions = [
      removeActions.started(removePayload),
      removeActions.done({ params: removePayload, result: undefined }),
    ];
    const store = mockStore({});
    await store.dispatch(remove(removePayload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Reducer: users', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      list: [],
      isLoading: false,
    });
  });

  it('Action: getUsers', () => {
    const users = [
      {
        updatedAt: 1609737325723,
        id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        username: 'Shun',
        createdAt: 1609226313258,
      },
    ];
    const action = getUsers(users);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      list: users,
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

describe('Selector: users', () => {
  const state = {
    ui: {
      project: {
        createdAt: 1609591469794,
        ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        updatedAt: 1609643975327,
        title: 'Output',
        dueDate: '2021-12-31',
        id: '9tAi4sXUiVpfabI7Yy2J',
        detail: 'OutputするコンテンツをTaskにしていく',
        startDate: '2021-01-02',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      },
      task: {
        projectId: '9tAi4sXUiVpfabI7Yy2J',
        createdAt: 1614049559721,
        title: 'Zenn: 3月分',
        description: '',
        id: 'jE20zP8DEbZsrCrgsrdR',
        updatedAt: 1614049559721,
        assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        status: 'NEW',
        dueDate: '2021-03-31',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        startDate: '2021-03-01',
      },
      user: {
        isAuth: true,
        id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        email: 'hakushun.pianist@gmail.com',
        username: 'Shun',
      },
    },
    resources: {
      users: {
        isLoading: false,
        list: [
          {
            username: '中野駿',
            id: 'OlIVJcsZFERphhp9TCbnMtU5Fmt1',
            createdAt: 1615104847405,
            updatedAt: 1615104847405,
          },
          {
            updatedAt: 1609737325723,
            id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            username: 'Shun',
            createdAt: 1609226313258,
          },
        ],
      },
      tasks: {
        isLoading: false,
        list: [
          {
            projectId: '9tAi4sXUiVpfabI7Yy2J',
            createdAt: 1614049559721,
            title: 'Zenn: 3月分',
            description: '',
            id: 'jE20zP8DEbZsrCrgsrdR',
            updatedAt: 1614049559721,
            assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            status: 'NEW',
            dueDate: '2021-03-31',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            startDate: '2021-03-01',
          },
          {
            updatedAt: 1612857877971,
            id: 'jYthwQANpyTZ7iRXE7sU',
            createdAt: 1612677871636,
            description: '',
            assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            startDate: '2021-02-07',
            projectId: '9tAi4sXUiVpfabI7Yy2J',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            status: 'COMPLETE',
            title: 'Zenn: Custom Hooks',
            dueDate: '2021-02-09',
          },
        ],
      },
      projects: {
        isLoading: false,
        list: [
          {
            createdAt: 1609591469794,
            ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            updatedAt: 1609643975327,
            title: 'Output',
            dueDate: '2021-12-31',
            id: '9tAi4sXUiVpfabI7Yy2J',
            detail: 'OutputするコンテンツをTaskにしていく',
            startDate: '2021-01-02',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
          },
          {
            dueDate: '2021-01-30',
            detail: '',
            updatedAt: 1609816557245,
            startDate: '2020-12-29',
            id: 'BrwxFAMxgx2r6NYHjdiZ',
            userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
            createdAt: 1609246208352,
            title: 'TASKSHARE',
          },
        ],
      },
    },
  };
  it('selectUsers', () => {
    const result = state.resources.users.list;
    expect(result).toEqual(selectUsers(state));
  });

  it('selectIsLoading', () => {
    const result = false;
    expect(result).toEqual(selectIsLoading(state));
  });

  it('selectOwner', () => {
    const result = {
      updatedAt: 1609737325723,
      id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      username: 'Shun',
      createdAt: 1609226313258,
    };
    expect(result).toEqual(selectOwner(state));
  });

  it('selectAssignUser', () => {
    const result = {
      updatedAt: 1609737325723,
      id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      username: 'Shun',
      createdAt: 1609226313258,
    };
    expect(result).toEqual(selectAssignUser(state));
  });

  it('selectUserCreateProject', () => {
    const result = {
      updatedAt: 1609737325723,
      id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      username: 'Shun',
      createdAt: 1609226313258,
    };
    expect(result).toEqual(selectUserCreateProject(state));
  });

  it('selectUserCreateTask', () => {
    const result = {
      updatedAt: 1609737325723,
      id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      username: 'Shun',
      createdAt: 1609226313258,
    };
    expect(result).toEqual(selectUserCreateTask(state));
  });
});
