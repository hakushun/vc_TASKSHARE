import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { logoutUser } from './user';
import { updateActions as updateTaskActions } from './tasks';

const actionCreator = actionCreatorFactory();

export const toggleBargerMenu = actionCreator('TOGGLE_BARGER_MENU');
export const toggleStatusList = actionCreator('TOGGLE_STATUS_LIST');

const INITIAL_STATE: {
  bargerMenu: boolean;
  statusList: boolean;
} = {
  bargerMenu: false,
  statusList: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggleBargerMenu, (state) => ({
    ...state,
    bargerMenu: !state.bargerMenu,
  }))
  .case(toggleStatusList, (state) => ({
    ...state,
    statusList: !state.statusList,
  }))
  .case(logoutUser, (state) => ({
    ...state,
    bargerMenu: !state.bargerMenu,
  }))
  .case(updateTaskActions.done, (state) => ({
    ...state,
    statusList: false,
  }));

export default reducer;

export const selectBargerMenu = createSelector(
  [(state: RootState) => state.ui.dropdown.bargerMenu],
  (bargerMenu) => bargerMenu,
);

export const selectStatusList = createSelector(
  [(state: RootState) => state.ui.dropdown.statusList],
  (statusList) => statusList,
);
