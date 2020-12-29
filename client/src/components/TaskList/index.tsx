import React from 'react';
import { useDispatch } from 'react-redux';
import { focus, Task } from '../../redux/modules/task';
import { TaskList as Presentational } from './TaskList';

type Props = {
  context: 'open' | 'close';
  tasks: Task[];
};
export const TaskList: React.VFC<Props> = ({ context, tasks }) => {
  const dispatch = useDispatch();

  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };
  return (
    <Presentational context={context} tasks={tasks} handleFocus={handleFocus} />
  );
};
