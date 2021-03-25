import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Task } from '../../../redux/modules/task';
import { TaskBoard as Presentational } from './TaskBoard';

type Props = {
  assignedTasks: Task[];
};
export const TaskBoard: React.VFC<Props> = ({ assignedTasks }) => (
  <DndProvider backend={HTML5Backend}>
    <Presentational assignedTasks={assignedTasks} />
  </DndProvider>
);
