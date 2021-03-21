import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

export type View = 'list' | 'board';

const actionCreator = actionCreatorFactory();

export const change = actionCreator<View>('CHANGE_VIEW');

const INITIAL_STATE: { current: View } = {
  current: 'list',
};

const reducer = reducerWithInitialState(INITIAL_STATE).case(
  change,
  (_state, payload) => ({
    current: payload,
  }),
);

export default reducer;

export const selectCurrentView = createSelector(
  [(state: RootState) => state.ui.view.current],
  (view) => view,
);
