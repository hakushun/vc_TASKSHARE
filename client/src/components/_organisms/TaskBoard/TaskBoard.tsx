import React from 'react';
import { Task } from '../../../redux/modules/task';
import { TaskCardList } from '../../_molecules/TaskCardList';
import styles from './index.module.scss';

type Props = {
  assignedTasks: Task[];
};
export const TaskBoard: React.VFC<Props> = ({ assignedTasks }) => (
  <div className={styles.root}>
    <TaskCardList status="NEW" assignedTasks={assignedTasks} />
    <TaskCardList status="IN_PROGRESS" assignedTasks={assignedTasks} />
    <TaskCardList status="REVIEWING" assignedTasks={assignedTasks} />
    <TaskCardList status="COMPLETE" assignedTasks={assignedTasks} />
  </div>
);
