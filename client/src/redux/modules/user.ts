import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { removeActions } from './users';

export type User = {
  isAuth: boolean;
  id: string;
  email: string;
  username: string;
};
type AuthUser = {
  id: string;
  email: string;
  username: string;
} | null;

const actionCreator = actionCreatorFactory();
export const authUser = actionCreator<AuthUser>('AUTH_USER');
export const logoutUser = actionCreator('LOGOUT_USER');

const INITIAL_STATE: User = { isAuth: false, id: '', email: '', username: '' };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(authUser, (state, payload) => {
    if (!payload) return { ...INITIAL_STATE };
    return {
      ...state,
      isAuth: true,
      ...payload,
    };
  })
  .case(logoutUser, () => ({ ...INITIAL_STATE }))
  .case(removeActions.done, () => ({ ...INITIAL_STATE }));

export default reducer;

export const selectIsAuth = createSelector(
  [(state: RootState) => state.ui.user.isAuth],
  (isAuth) => isAuth,
);

export const selectUser = createSelector(
  [
    (state: RootState) => state.ui.user,
    (state: RootState) => state.resources.users.list,
  ],
  (user, users) => {
    const target = users.find((usr) => usr.id === user.id);
    if (!target) return { id: '', username: '', createdAt: 0, updatedAt: 0 };
    return target;
  },
);
