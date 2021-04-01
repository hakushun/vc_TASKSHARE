/* eslint-disable no-undefined */
import reducer, { change, selectCurrentView } from '../view';

describe('Reducer: view', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({ current: 'list' });
  });

  it('Action: change', () => {
    const action = change('board');
    const result = reducer(undefined, action);
    expect(result).toEqual({ current: 'board' });
  });
});

describe('Selector: view', () => {
  const state = {
    ui: {
      view: {
        current: 'list',
      },
    },
  };
  const result = 'list';
  expect(result).toEqual(selectCurrentView(state));
});
