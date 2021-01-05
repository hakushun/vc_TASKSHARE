import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Project } from './project';
import { RootState } from './reducers';
import { Task, TaskStatus } from './task';
import { calculateProgress } from './tasks';

export type ProjectsSort = {
  key: 'owner' | 'progress';
  order: 'up' | 'down';
};
export type TasksSort = {
  key: 'status' | 'dueDate';
  order: 'up' | 'down';
};

const actionCreator = actionCreatorFactory();

export const sortProjects = actionCreator<ProjectsSort>('SORT_PROJECTS');
export const sortTasks = actionCreator<TasksSort>('SORT_TASKS');

const INITIAL_STATE: {
  projects: ProjectsSort;
  tasks: TasksSort;
} = {
  projects: { key: 'progress', order: 'up' },
  tasks: { key: 'dueDate', order: 'up' },
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

export const selectProjectsSort = createSelector(
  [(state: RootState) => state.ui.sort.projects],
  (projects) => projects,
);

export const selectTasksSort = createSelector(
  [(state: RootState) => state.ui.sort.tasks],
  (tasks) => tasks,
);

// 関数
export const sortProjectArray = (
  projects: Project[],
  tasks: Task[],
  sort: ProjectsSort,
): Project[] => {
  if (sort.key === 'progress') {
    projects.sort((a, b) => {
      if (calculateProgress(tasks, a.id!) === calculateProgress(tasks, b.id!))
        return 0;
      if (sort.order === 'up') {
        return calculateProgress(tasks, a.id!) > calculateProgress(tasks, b.id!)
          ? 1
          : -1;
      }
      if (sort.order === 'down') {
        return calculateProgress(tasks, a.id!) > calculateProgress(tasks, b.id!)
          ? -1
          : 1;
      }
      return 0;
    });
  }
  if (sort.key === 'owner') {
    projects.sort((a, b) => {
      if (a.ownerId === b.ownerId) return 0;
      if (sort.order === 'up') {
        return a.ownerId > b.ownerId ? 1 : -1;
      }
      if (sort.order === 'down') {
        return a.ownerId > b.ownerId ? -1 : 1;
      }
      return 0;
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

export const sortTaskArray = (tasks: Task[], sort: TasksSort): Task[] => {
  if (sort.key === 'status') {
    return tasks.sort((a, b) => {
      if (changeStatusToNumber(a.status) === changeStatusToNumber(b.status))
        return 0;
      if (sort.order === 'up') {
        return changeStatusToNumber(a.status) > changeStatusToNumber(b.status)
          ? 1
          : -1;
      }
      if (sort.order === 'down') {
        return changeStatusToNumber(a.status) > changeStatusToNumber(b.status)
          ? -1
          : 1;
      }
      return 0;
    });
  }
  if (sort.key === 'dueDate') {
    return tasks.sort((a, b) => {
      if (a.dueDate === b.dueDate) return 0;
      if (sort.order === 'up') {
        return a.dueDate > b.dueDate ? 1 : -1;
      }
      if (sort.order === 'down') {
        return a.dueDate > b.dueDate ? -1 : 1;
      }
      return 0;
    });
  }
  return tasks;
};
