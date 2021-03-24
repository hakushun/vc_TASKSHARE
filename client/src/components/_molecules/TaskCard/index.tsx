import React from 'react';
import { useDispatch } from 'react-redux';
import { focus, Task } from '../../../redux/modules/task';
import { TaskCard as Presentational } from './TaskCard';

type Props = {
  task: Task;
};
export const TaskCard: React.VFC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };
  return <Presentational task={task} handleFocus={handleFocus} />;
};
