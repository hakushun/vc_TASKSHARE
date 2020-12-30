import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import {
  createActions as createProjectActions,
  updateActions as updateProjectActions,
  removeActions as removeProjectActions,
} from './projects';
import {
  createActions as createTaskActions,
  updateActions as updateTaskActions,
  removeActions as removeTaskActions,
} from './tasks';
import {
  createActions as createActivityActions,
  updateActions as updateActivityActions,
  removeActions as removeActivityActions,
} from './activities';
import {
  createActions as createUserActions,
  removeActions as removeUserActions,
  updateActions as updateUserActions,
} from './users';

const actionCreator = actionCreatorFactory();

export type EmitErrorPayload = {
  title: string;
  description: string;
};

export const toggle = actionCreator('TOGGLE_DIALOG');
export const emitError = actionCreator<EmitErrorPayload>('EMIT_ERROR');

const INITIAL_STATE: {
  isOpened: boolean;
  message: {
    title: string;
    description: string;
  };
} = {
  isOpened: false,
  message: {
    title: '',
    description: '',
  },
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggle, (state) => ({
    ...state,
    isOpened: !state.isOpened,
  }))
  .case(emitError, (_state, { title, description }) => ({
    isOpened: true,
    message: {
      title,
      description,
    },
  }))
  .case(createUserActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(updateUserActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(removeUserActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(createProjectActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(createTaskActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(createActivityActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(updateProjectActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(updateTaskActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(updateActivityActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(removeProjectActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(removeTaskActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }))
  .case(removeActivityActions.failed, (_state, { error }) => ({
    isOpened: true,
    message: {
      title: error.name,
      description: error.message,
    },
  }));

export default reducer;

export const selectDialog = createSelector(
  [(state: RootState) => state.ui.dialog.isOpened],
  (isOpened) => isOpened,
);

export const selectDialogMessage = createSelector(
  [(state: RootState) => state.ui.dialog.message],
  (message) => message,
);
