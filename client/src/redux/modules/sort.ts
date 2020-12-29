import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Project } from './project';
import { RootState } from './reducers';
import { Task, TaskStatus } from './task';
import { calculateProgress, countOpenRelatedTasks } from './tasks';

export type ProjectsSortKey = {
  progress?: 'up' | 'down ';
  openTask?: 'up' | 'down ';
};
export type TasksSortKey = {
  status?: 'up' | 'down ';
  dueDate?: 'up' | 'down ';
};

const actionCreator = actionCreatorFactory();

export const sortProjects = actionCreator<ProjectsSortKey>('SORT_PROJECTS');
export const sortTasks = actionCreator<TasksSortKey>('SORT_TASKS');

const INITIAL_STATE: {
  projects: ProjectsSortKey;
  tasks: TasksSortKey;
} = {
  projects: { progress: 'up' },
  tasks: { status: 'up' },
};

const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(sortProjects, (state, payload) => ({
    ...state,
    projects: { ...payload },
  }))
  .case(sortTasks, (state, payload) => ({
    ...state,
    tasks: payload,
  }));

export default reducer;

export const selectProjectsSortKey = createSelector(
  [(state: RootState) => state.ui.sort.projects],
  (projects) => projects,
);

export const selectTasksSortKey = createSelector(
  [(state: RootState) => state.ui.sort.tasks],
  (tasks) => tasks,
);

// 関数
export const sortProjectArray = (
  projects: Project[],
  tasks: Task[],
  key: ProjectsSortKey,
): Project[] => {
  if (key.progress) {
    projects.sort((a, b) => {
      if (calculateProgress(tasks, a.id!) === calculateProgress(tasks, b.id!))
        return 0;
      if (key.progress === 'up') {
        return calculateProgress(tasks, a.id!) > calculateProgress(tasks, b.id!)
          ? 1
          : -1;
      }
      return calculateProgress(tasks, a.id!) > calculateProgress(tasks, b.id!)
        ? -1
        : 1;
    });
  }
  if (key.openTask) {
    projects.sort((a, b) => {
      if (
        countOpenRelatedTasks(tasks, a.id!) ===
        countOpenRelatedTasks(tasks, b.id!)
      )
        return 0;
      if (key.openTask === 'up') {
        return countOpenRelatedTasks(tasks, a.id!) >
          countOpenRelatedTasks(tasks, b.id!)
          ? 1
          : -1;
      }
      return countOpenRelatedTasks(tasks, a.id!) >
        countOpenRelatedTasks(tasks, b.id!)
        ? -1
        : 1;
    });
  }
  return projects;
};

const changeStatusToNumber = (status: TaskStatus): number => {
  switch (status) {
    case 'NEW':
      return 0;
    case 'IN_PROGRESS':
      return 1;
    case 'REVIEWING':
      return 2;
    case 'COMPLETE':
      return 3;
    default:
      return 0;
  }
};

export const sortTaskArray = (tasks: Task[], key: TasksSortKey): Task[] => {
  if (key.status) {
    return tasks.sort((a, b) => {
      if (changeStatusToNumber(a.status) === changeStatusToNumber(b.status))
        return 0;
      if (key.status === 'up') {
        return changeStatusToNumber(a.status) > changeStatusToNumber(b.status)
          ? 1
          : -1;
      }
      return changeStatusToNumber(a.status) > changeStatusToNumber(b.status)
        ? -1
        : 1;
    });
  }
  if (key.dueDate) {
    return tasks.sort((a, b) => {
      if (a.dueDate === b.dueDate) return 0;
      if (key.dueDate === 'up') {
        return a.dueDate > b.dueDate ? 1 : -1;
      }
      return a.dueDate > b.dueDate ? -1 : 1;
    });
  }
  return tasks;
};
