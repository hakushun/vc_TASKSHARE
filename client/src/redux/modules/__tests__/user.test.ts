/* eslint-disable no-undefined */
import reducer, { authUser, logoutUser, selectUser } from '../user';

describe('Reducer: user', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({ isAuth: false, id: '', email: '', username: '' });
  });

  it('Action: authUser', () => {
    const action = authUser({
      id: 'xxx1234xxx',
      email: 'sample@sample.com',
      username: 'sample',
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      isAuth: true,
      id: 'xxx1234xxx',
      email: 'sample@sample.com',
      username: 'sample',
    });
  });

  it('Action: logoutUser', () => {
    const action = logoutUser();
    const result = reducer(undefined, action);
    expect(result).toEqual({ isAuth: false, id: '', email: '', username: '' });
  });
});

describe('Selector: user', () => {
  it('Has a user', () => {
    const state = {
      ui: {
        user: {
          isAuth: true,
          id: 'xxx1234xxx',
          email: 'sample@sample.com',
          username: 'sample',
        },
      },
      resources: {
        users: {
          list: [
            {
              id: 'xxx1234xxx',
              username: 'sample',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          isLoading: false,
        },
      },
    };
    const result = {
      id: 'xxx1234xxx',
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'sample',
    };
    expect(result).toEqual(selectUser(state));
  });

  it('Has NO users', () => {
    const state = {
      ui: {
        user: {
          isAuth: true,
          id: '',
          email: 'sample@sample.com',
          username: 'sample',
        },
      },
      resources: {
        users: {
          list: [
            {
              id: 'xxx1234xxx',
              username: 'sample',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          isLoading: false,
        },
      },
    };
    const result = {
      id: '',
      username: '',
      createdAt: 0,
      updatedAt: 0,
    };
    expect(result).toEqual(selectUser(state));
  });
});
