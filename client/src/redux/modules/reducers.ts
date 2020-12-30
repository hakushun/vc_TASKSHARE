import { combineReducers } from 'redux';
import user from './user';
import users from './users';
import dialog from './dialog';
import dropdown from './dropdown';
import modal from './modal';
import bargerMenu from './bargerMenu';
import sort from './sort';
import project from './project';
import projects from './projects';
import task from './task';
import tasks from './tasks';
import activity from './activity';
import activities from './activities';

const rootReducer = combineReducers({
  resources: combineReducers({ users, projects, tasks, activities }),
  ui: combineReducers({
    user,
    dialog,
    dropdown,
    modal,
    bargerMenu,
    sort,
    project,
    task,
    activity,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
