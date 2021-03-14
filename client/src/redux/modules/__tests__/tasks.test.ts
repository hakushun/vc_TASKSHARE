/* eslint-disable no-undefined */
import steps from 'redux-effects-steps';
import configureMockStore from 'redux-mock-store';
import * as module from '../../../libs/db/crud';
import { Task } from '../task';
import reducer, {
  create,
  createActions,
  CreatePayload,
  getTasks,
  remove,
  removeActions,
  selectAssignedTasks,
  selectCloseTasks,
  selectIsLoading,
  selectOpenTasks,
  selectRelatedTasks,
  selectTasks,
  update,
  updateActions,
  UpdatePayload,
} from '../tasks';

const mockStore = configureMockStore([steps]);

const createPayload: CreatePayload = {
  dueDate: '2021-03-09',
  description: '',
  startDate: '2021-02-10',
  userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  projectId: '9tAi4sXUiVpfabI7Yy2J',
  title: 'LT: 良いコードとは何か',
  assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  status: 'NEW',
};
const updatePayload: UpdatePayload = {
  dueDate: '2021-03-09',
  description: '',
  startDate: '2021-02-10',
  userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  projectId: '9tAi4sXUiVpfabI7Yy2J',
  id: '5biodWSRHVB874NtTT05',
  updatedAt: 1615264694439,
  title: 'LT: 良いコードとは何か',
  assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  status: 'COMPLETE',
  createdAt: 1611978975772,
};
const removePayload = {
  id: '5biodWSRHVB874NtTT05',
};
const error = { name: 'error', message: 'something is wrong' };

describe('Async actions: tasks', () => {
  it('create: SUCCESS', async () => {
    jest.spyOn(module, 'postTask').mockImplementationOnce(async () => {
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
    jest.spyOn(module, 'putTask').mockImplementationOnce(async () => {
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
    jest.spyOn(module, 'deleteTask').mockImplementationOnce(async () => {
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

describe('Reducer: tasks', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      list: [],
      isLoading: false,
    });
  });

  it('Action: getTasks', () => {
    const tasks: Task[] = [
      {
        dueDate: '2021-03-09',
        description: '',
        startDate: '2021-02-10',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        projectId: '9tAi4sXUiVpfabI7Yy2J',
        id: '5biodWSRHVB874NtTT05',
        updatedAt: 1615264694439,
        title: 'LT: 良いコードとは何か',
        assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        status: 'COMPLETE',
        createdAt: 1611978975772,
      },
    ];
    const action = getTasks(tasks);
    const result = reducer(undefined, action);
    expect(result).toEqual({
      list: tasks,
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

describe('Selector: tasks', () => {
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
      sort: {
        projects: { key: 'progress', order: 'up' },
        tasks: { key: 'dueDate', order: 'up' },
      },
      filter: {
        started: 'all',
        dueDate: 'all',
        complete: false,
      },
      user: {
        isAuth: true,
        id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        email: 'hakushun.pianist@gmail.com',
        username: 'Shun',
      },
    },
    resources: {
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
  it('selectTasks', () => {
    const result = state.resources.tasks.list;
    expect(result).toEqual(selectTasks(state));
  });

  it('selectAssignedTasks', () => {
    const result = [
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
    ];
    expect(result).toEqual(selectAssignedTasks(state));
  });

  it('selectOpenTasks', () => {
    const result = [
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
    ];
    expect(result).toEqual(selectOpenTasks(state));
  });

  it('selectCloseTasks', () => {
    const result = [
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
    ];
    expect(result).toEqual(selectCloseTasks(state));
  });

  it('selectRelatedTasks', () => {
    const result = [
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
    ];
    expect(result).toEqual(selectRelatedTasks(state));
  });

  it('selectIsLoading', () => {
    const result = false;
    expect(result).toEqual(selectIsLoading(state));
  });
});
