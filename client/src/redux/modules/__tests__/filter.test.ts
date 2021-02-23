/* eslint-disable no-undefined */
import reducer, { change, selectFilter } from '../filter';

describe('Reducer: filter', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      started: 'all',
      dueDate: 'all',
      complete: false,
    });
  });

  it('Action: change started', () => {
    const action = change({ started: 'notYet' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      started: 'notYet',
      dueDate: 'all',
      complete: false,
    });
  });

  it('Action: change dueDate', () => {
    const action = change({ dueDate: 'today' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      started: 'all',
      dueDate: 'today',
      complete: false,
    });
  });

  it('Action: change complete', () => {
    const action = change({ complete: true });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      started: 'all',
      dueDate: 'all',
      complete: true,
    });
  });
});

describe('Selector: filter', () => {
  it('selectFilter', () => {
    const state = {
      ui: {
        filter: {
          started: 'all',
          dueDate: 'today',
          complete: false,
        },
      },
    };
    const result = { started: 'all', dueDate: 'today', complete: false };
    expect(result).toEqual(selectFilter(state));
  });
});
