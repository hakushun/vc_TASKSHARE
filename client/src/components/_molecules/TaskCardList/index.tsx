import React from 'react';
import { Task, TaskStatus } from '../../../redux/modules/task';
import { TaskCardList as Presentational } from './TaskCardList';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
};
export const TaskCardList: React.VFC<Props> = ({ status, assignedTasks }) => (
  <Presentational status={status} assignedTasks={assignedTasks} />
);
