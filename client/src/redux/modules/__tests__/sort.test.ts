/* eslint-disable no-undefined */
import reducer, {
  selectProjectsSort,
  selectTasksSort,
  sortProjects,
  sortTasks,
} from '../sort';

describe('Reducer: sort', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({
      projects: { key: 'progress', order: 'up' },
      tasks: { key: 'dueDate', order: 'up' },
    });
  });

  it('Action: sortProjects', () => {
    const action = sortProjects({ key: 'owner', order: 'up' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projects: { key: 'owner', order: 'up' },
      tasks: { key: 'dueDate', order: 'up' },
    });
  });

  it('Action: sortTasks', () => {
    const action = sortTasks({ key: 'status', order: 'up' });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      projects: { key: 'progress', order: 'up' },
      tasks: { key: 'status', order: 'up' },
    });
  });
});

describe('Selector: sort', () => {
  it('selectProjectsSort', () => {
    const state = {
      ui: {
        sort: {
          projects: { key: 'progress', order: 'up' },
          tasks: { key: 'dueDate', order: 'up' },
        },
      },
    };
    const result = { key: 'progress', order: 'up' };
    expect(result).toEqual(selectProjectsSort(state));
  });

  it('selectTasksSort', () => {
    const state = {
      ui: {
        sort: {
          projects: { key: 'progress', order: 'up' },
          tasks: { key: 'dueDate', order: 'up' },
        },
      },
    };
    const result = { key: 'dueDate', order: 'up' };
    expect(result).toEqual(selectTasksSort(state));
  });
});
