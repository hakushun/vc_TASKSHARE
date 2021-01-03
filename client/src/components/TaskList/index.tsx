import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInstance } from '../../libs/db/getInstance';
import { focus, Task } from '../../redux/modules/task';
import { getTasks } from '../../redux/modules/tasks';
import { TaskList as Presentational } from './TaskList';

type Props = {
  context: 'open' | 'close';
  tasks: Task[];
};
export const TaskList: React.VFC<Props> = ({ context, tasks }) => {
  const dispatch = useDispatch();
  const db = getInstance();

  const handleFocus = (taskId: string, projectId: string) => {
    dispatch(focus({ id: taskId, projectId }));
  };

  useEffect(() => {
    db.collection('tasks').onSnapshot((snapshot) => {
      const items: Task[] = [];
      snapshot.forEach((doc) => items.push(doc.data() as Task));
      dispatch(getTasks(items));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Presentational context={context} tasks={tasks} handleFocus={handleFocus} />
  );
};
