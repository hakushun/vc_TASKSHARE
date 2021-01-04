import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasksSortKey, sortTasks } from '../../../redux/modules/sort';
import { TaskListHeader as Presentational } from './TaskListHeader';

type Props = {
  context: 'open' | 'close';
};
export const TaskListHeader: React.VFC<Props> = ({ context }) => {
  const dispatch = useDispatch();
  const tasksSortKey = useSelector(selectTasksSortKey);

  const handleSrotTasks = (key: 'status' | 'dueDate') => {
    const value = tasksSortKey[key] === 'up' ? 'down' : 'up';
    dispatch(sortTasks({ [key]: value }));
  };
  return (
    <Presentational
      context={context}
      tasksSortKey={tasksSortKey}
      handleSrotTasks={handleSrotTasks}
    />
  );
};
