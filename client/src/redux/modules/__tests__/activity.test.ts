/* eslint-disable no-undefined */
import reducer, { add, edit, selectActivity } from '../activity';

describe('Reducer: activity', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({ comment: '' });
  });

  it('Action: add', () => {
    const action = add({ projectId: 'xxx0000xxx', userId: 'xxx1234xxx' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      comment: '',
      projectId: 'xxx0000xxx',
      userId: 'xxx1234xxx',
    });
  });

  it('Action: edit', () => {
    const state = {
      id: 'xxx9876xxx',
      comment: '',
      projectId: 'xxx0000xxx',
      userId: 'xxx1234xxx',
    };
    const action = edit({ id: 'xxx9876xxx' });
    const result = reducer(state, action);
    expect(result).toEqual({
      id: 'xxx9876xxx',
      comment: '',
      projectId: 'xxx0000xxx',
      userId: 'xxx1234xxx',
    });
  });
});

describe('Selector: activity', () => {
  it('Has an activity', () => {
    const state = {
      ui: {
        activity: {
          updatedAt: 1614055379767,
          comment: 'パワポ完成\n',
          userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
          createdAt: 1614055379767,
          id: 'c070MzHABS7MmvdaULwC',
          taskId: '5biodWSRHVB874NtTT05',
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
          ],
          isLoading: false,
        },
      },
    };
    const result = {
      updatedAt: 1614055379767,
      comment: 'パワポ完成\n',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      createdAt: 1614055379767,
      id: 'c070MzHABS7MmvdaULwC',
      taskId: '5biodWSRHVB874NtTT05',
    };
    expect(result).toEqual(selectActivity(state));
  });

  it('Has NO activities', () => {
    const state = {
      ui: {
        activity: {
          updatedAt: 1614055379767,
          comment: 'パワポ完成\n',
          userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
          createdAt: 1614055379767,
          id: 'c070MzHABS7MmvdaULwC',
          taskId: '5biodWSRHVB874NtTT05',
        },
      },
      resources: {
        activities: {
          list: [],
          isLoading: false,
        },
      },
    };
    const result = {
      updatedAt: 1614055379767,
      comment: 'パワポ完成\n',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      createdAt: 1614055379767,
      id: 'c070MzHABS7MmvdaULwC',
      taskId: '5biodWSRHVB874NtTT05',
    };
    expect(result).toEqual(selectActivity(state));
  });
});
