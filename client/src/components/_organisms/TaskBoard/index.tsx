import React from 'react';
import { Task } from '../../../redux/modules/task';
import { TaskBoard as Presentational } from './TaskBoard';

type Props = {
  assignedTasks: Task[];
};
export const TaskBoard: React.VFC<Props> = ({ assignedTasks }) => (
  <Presentational assignedTasks={assignedTasks} />
);
