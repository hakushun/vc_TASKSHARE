/* eslint-disable no-undefined */
import reducer, {
  focus,
  add,
  edit,
  selectProject,
  selectProjectByTask,
} from '../project';
import { focus as focusTask } from '../task';
import { getStringDate } from '../../../libs/date';
import { removeActions } from '../projects';

describe('Reducer: project', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      title: '',
      ownerId: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      detail: '',
    });
  });

  it('Action: focus', () => {
    const action = focus({ id: 'xxx1234xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      id: 'xxx1234xxx',
      title: '',
      ownerId: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      detail: '',
    });
  });

  it('Action: add', () => {
    const action = add({ userId: 'xxx1234xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      userId: 'xxx1234xxx',
      title: '',
      ownerId: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      detail: '',
    });
  });

  it('Action: edit', () => {
    const action = edit({ id: 'xxx1234xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      id: 'xxx1234xxx',
      title: '',
      ownerId: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      detail: '',
    });
  });

  it('Action: focusTask', () => {
    const action = focusTask({ id: 'xxx1234xxx', projectId: 'xxx9876xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      id: 'xxx9876xxx',
      title: '',
      ownerId: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      detail: '',
    });
  });

  it('Action: removeActions.done', () => {
    const action = removeActions.done({
      params: { id: 'xxx1234xxx' },
      result: { id: 'xxx1234xxx' },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      title: '',
      ownerId: '',
      startDate: getStringDate(new Date().getTime()),
      dueDate: getStringDate(new Date().getTime()),
      detail: '',
    });
  });
});

describe('Selector: project', () => {
  const projects = {
    isLoading: false,
    list: [
      {
        title: 'かるぴす',
        ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        createdAt: 1609578204239,
        updatedAt: 1609670290378,
        dueDate: '2021-12-05',
        id: 'cxKt5Tr6a8jOjCUaTKsP',
        userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
        detail: '',
        startDate: '2021-01-02',
      },
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
  };
  it('selectProject', () => {
    const state = {
      ui: {
        project: {
          title: '',
          ownerId: '',
          startDate: getStringDate(new Date().getTime()),
          dueDate: getStringDate(new Date().getTime()),
          detail: '',
          id: '9tAi4sXUiVpfabI7Yy2J',
        },
      },
      resources: {
        projects,
      },
    };
    const result = {
      createdAt: 1609591469794,
      ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      updatedAt: 1609643975327,
      title: 'Output',
      dueDate: '2021-12-31',
      id: '9tAi4sXUiVpfabI7Yy2J',
      detail: 'OutputするコンテンツをTaskにしていく',
      startDate: '2021-01-02',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    };
    expect(result).toEqual(selectProject(state));
  });

  it('selectProjectByTask', () => {
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
          id: '5biodWSRHVB874NtTT05',
        },
      },
      resources: {
        projects,
      },
    };
    const result = {
      createdAt: 1609591469794,
      ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      updatedAt: 1609643975327,
      title: 'Output',
      dueDate: '2021-12-31',
      id: '9tAi4sXUiVpfabI7Yy2J',
      detail: 'OutputするコンテンツをTaskにしていく',
      startDate: '2021-01-02',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    };
    expect(result).toEqual(selectProjectByTask(state));
  });
});
