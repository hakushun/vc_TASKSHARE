import React from 'react';
import { useDrag } from 'react-dnd';
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

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASKCARD',
    item: { ...task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Presentational
      task={task}
      isDragging={isDragging}
      handleFocus={handleFocus}
      drag={drag}
    />
  );
};
