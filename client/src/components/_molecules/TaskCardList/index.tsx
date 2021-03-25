import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { StepAction } from 'redux-effects-steps';
import { Task, TaskStatus } from '../../../redux/modules/task';
import { update, UpdatePayload } from '../../../redux/modules/tasks';
import { TaskCardList as Presentational } from './TaskCardList';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
};
export const TaskCardList: React.VFC<Props> = ({ status, assignedTasks }) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop<UpdatePayload, StepAction<AnyAction>, {
    isOver: boolean;
}>(() => ({
    accept: 'TASKCARD',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item) => dispatch(update({...item, status})),
  }));

  return (
    <Presentational
      status={status}
      assignedTasks={assignedTasks}
      isOver={isOver}
      drop={drop}
    />
  );
};
