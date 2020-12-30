import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { updateActions as updateTaskActions } from './tasks';

const actionCreator = actionCreatorFactory();

export const toggleStatusList = actionCreator('TOGGLE_STATUS_LIST');

const INITIAL_STATE: {
  statusList: boolean;
} = {
  statusList: false,
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggleStatusList, (state) => ({
    ...state,
    statusList: !state.statusList,
  }))
  .case(updateTaskActions.done, (state) => ({
    ...state,
    statusList: false,
  }));

export default reducer;

export const selectStatusList = createSelector(
  [(state: RootState) => state.ui.dropdown.statusList],
  (statusList) => statusList,
);
