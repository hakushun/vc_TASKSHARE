/* eslint-disable no-undefined */
import reducer, { focus, add, edit, selectTask } from '../task';
import { getStringDate } from '../../../libs/date';
import { removeActions } from '../tasks';

describe('Reducer: task', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      projectId: '',
      title: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      description: '',
      status: 'NEW',
      assignTo: '',
    });
  });

  it('Action: focus', () => {
    const action = focus({ id: 'xxx1234xxx', projectId: 'xxx9876xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      id: 'xxx1234xxx',
      projectId: 'xxx9876xxx',
      title: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      description: '',
      status: 'NEW',
      assignTo: '',
    });
  });

  it('Action: add', () => {
    const action = add({ userId: 'xxx1234xxx', projectId: 'xxx9876xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      userId: 'xxx1234xxx',
      projectId: 'xxx9876xxx',
      title: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      description: '',
      status: 'NEW',
      assignTo: '',
    });
  });

  it('Action: edit', () => {
    const action = edit({ id: 'xxx1234xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      id: 'xxx1234xxx',
      projectId: '',
      title: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      description: '',
      status: 'NEW',
      assignTo: '',
    });
  });

  it('Action: removeActions.done', () => {
    const action = removeActions.done({
      params: { id: 'xxx1234xxx' },
      result: undefined,
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projectId: '',
      title: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      description: '',
      status: 'NEW',
      assignTo: '',
    });
  });
});

describe('Selector: task', () => {
  const tasks = [
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
    {
      description: '',
      startDate: '2021-01-09',
      dueDate: '2021-02-28',
      assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      updatedAt: 1611978929330,
      title: '参加アンケート送信',
      id: 'nAnukCEf6FOQMEi7HX36',
      createdAt: 1609578235373,
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      projectId: 'cxKt5Tr6a8jOjCUaTKsP',
      status: 'NEW',
    },
  ];
  it('selectTask: has a target', () => {
    const state = {
      ui: {
        task: {
          projectId: '9tAi4sXUiVpfabI7Yy2J',
          title: '',
          startDate: '2021-02-25',
          dueDate: '2021-02-25',
          description: '',
          status: 'NEW',
          assignTo: '',
          id: 'jE20zP8DEbZsrCrgsrdR',
        },
      },
      resources: {
        tasks: {
          isLoading: false,
          list: tasks,
        },
      },
    };
    const result = {
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
    };
    expect(result).toEqual(selectTask(state));
  });

  it('selectTask: has NO target', () => {
    const state = {
      ui: {
        task: {
          projectId: '',
          title: '',
          startDate: getStringDate(new Date().getTime()),
          dueDate: getStringDate(new Date().getTime()),
          description: '',
          status: 'NEW',
          assignTo: '',
        },
      },
      resources: {
        tasks: {
          isLoading: false,
          list: tasks,
        },
      },
    };
    const result = {
      projectId: '',
      title: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      description: '',
      status: 'NEW',
      assignTo: '',
    };
    expect(result).toEqual(selectTask(state));
  });
});
