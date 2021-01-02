import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducers';

export interface Activity {
  id?: string;
  projectId?: string;
  taskId?: string;
  comment: string;
  userId?: string;
  createdAt?: number;
  updatedAt?: number;
}
export type AddPayload =
  | {
      projectId: string;
      userId: string;
    }
  | {
      taskId: string;
      userId: string;
    };
const actionCreator = actionCreatorFactory();

export const add = actionCreator<AddPayload>('ADD_ACTIVITY');
export const edit = actionCreator<{ id: string }>('EDIT_ACTIVITY');

const INITIAL_STATE: Activity = { comment: '' };

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(add, (state, payload) => ({
    ...INITIAL_STATE,
    ...payload,
  }))
  .case(edit, (state, payload) => ({
    ...state,
    id: payload.id,
  }));
export default reducer;

export const selectActivity = createSelector(
  [
    (state: RootState) => state.ui.activity,
    (state: RootState) => state.resources.activities.list,
  ],
  (activity, activities) => {
    const target = activities.find((actvty) => actvty.id === activity.id);
    if (!target) return { ...activity };
    return target;
  },
);
