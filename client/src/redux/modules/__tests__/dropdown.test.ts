/* eslint-disable no-undefined */
import reducer, { selectStatusList, toggleStatusList } from '../dropdown';
import { updateActions as updateTaskActions } from '../tasks';

describe('Reducer: dropdown', () => {
  it('Initial state', () => {
    const result = reducer(undefined, {});
    expect(result).toEqual({ statusList: false });
  });

  it('Action: toggleStatusList', () => {
    const action = toggleStatusList();
    const result = reducer(undefined, action);
    expect(result).toEqual({
      statusList: true,
    });
  });

  it('Action: updateTaskActions.done', () => {
    const action = updateTaskActions.done({
      params: {
        id: '',
        projectId: '',
        title: '',
        assignTo: '',
        startDate: '',
        dueDate: '',
        description: '',
        status: 'NEW',
        userId: '',
        createdAt: 0,
        updatedAt: 0,
      },
    });
    const result = reducer(undefined, action);
    expect(result).toEqual({
      statusList: false,
    });
  });
});

describe('Selector: dropdown', () => {
  it('selectStatusList', () => {
    const state = { ui: { dropdown: { statusList: false } } };
    const result = false;
    expect(result).toEqual(selectStatusList(state));
  });
});
