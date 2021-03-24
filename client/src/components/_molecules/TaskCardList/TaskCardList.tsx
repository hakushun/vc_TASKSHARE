import React from 'react';
import { toStringStatus } from '../../../libs/utils';
import { Task, TaskStatus } from '../../../redux/modules/task';
import { TaskCard } from '../TaskCard';
import styles from './index.module.scss';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
};
export const TaskCardList: React.VFC<Props> = ({ status, assignedTasks }) => (
  <div className={styles.root}>
    <h3 className={styles.status}>{toStringStatus(status)}</h3>
    <ul className={styles.list}>
      {assignedTasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </ul>
  </div>
);
