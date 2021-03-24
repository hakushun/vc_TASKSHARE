import React from 'react';
import { useDispatch } from 'react-redux';
import { focus, Task, TaskStatus } from '../../../redux/modules/task';
import { TaskCardList as Presentational } from './TaskCardList';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
};
export const TaskCardList: React.VFC<Props> = ({ status, assignedTasks }) => {
  const dispatch = useDispatch();

  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };

  return (
    <Presentational
      status={status}
      assignedTasks={assignedTasks}
      handleFocus={handleFocus}
    />
  );
};
