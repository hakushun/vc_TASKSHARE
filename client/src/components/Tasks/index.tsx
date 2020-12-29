import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { add } from '../../redux/modules/task';
import { selectOpenTasks, selectCloseTasks } from '../../redux/modules/tasks';
import { Tasks as Presentational } from './Tasks';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const openTasks = useSelector(selectOpenTasks);
  const closeTasks = useSelector(selectCloseTasks);

  const handleAddTask = () => {
    dispatch(add(null));
  };
  return (
    <Presentational
      openTasks={openTasks}
      closeTasks={closeTasks}
      handleAddTask={handleAddTask}
    />
  );
};

export const Tasks = withAuth(Component);
