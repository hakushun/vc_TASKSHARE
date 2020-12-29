import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFirestore } from '../../libs/db/useFirestore';
import { focus, Task } from '../../redux/modules/task';
import { TaskList as Presentational } from './TaskList';

type Props = {
  context: 'open' | 'close';
  tasks: Task[];
};
export const TaskList: React.VFC<Props> = ({ context, tasks }) => {
  const dispatch = useDispatch();
  const { fetchTasks } = useFirestore();

  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Presentational context={context} tasks={tasks} handleFocus={handleFocus} />
  );
};
