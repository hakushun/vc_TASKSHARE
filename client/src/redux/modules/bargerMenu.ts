import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { logoutUser } from './user';

const actionCreator = actionCreatorFactory();

export const toggleBargerMenu = actionCreator('TOGGLE_BARGER_MENU');

const INITIAL_STATE: {
  bargerMenu: boolean;
} = {
  bargerMenu: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggleBargerMenu, (state) => ({
    ...state,
    bargerMenu: !state.bargerMenu,
  }))
  .case(logoutUser, (state) => ({
    ...state,
    bargerMenu: !state.bargerMenu,
  }));

export default reducer;

export const selectBargerMenu = createSelector(
  [(state: RootState) => state.ui.bargerMenu.bargerMenu],
  (bargerMenu) => bargerMenu,
);
