/* eslint-disable no-undefined */
import reducer, { selectBargerMenu, toggleBargerMenu } from '../bargerMenu';
import { logoutUser } from '../user';

describe('Reducer: bargerMenu', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({ bargerMenu: false });
  });

  it('Action: toggleBargerMenu', () => {
    const action = toggleBargerMenu();
    const result = reducer(undefined, action);
    expect(result).toEqual({ bargerMenu: true });
  });

  it('Action: logoutUser', () => {
    const action = logoutUser();
    const result = reducer({ bargerMenu: true }, action);
    expect(result).toEqual({ bargerMenu: false });
  });
});

describe('Selector: bargerMenu', () => {
  it('selectBargerMenu', () => {
    const state = { ui: { bargerMenu: { bargerMenu: false } } };
    const result = false;
    expect(result).toEqual(selectBargerMenu(state));
  });
});
