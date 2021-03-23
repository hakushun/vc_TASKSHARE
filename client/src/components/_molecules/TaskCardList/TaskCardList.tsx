import React from 'react';
import { toStringStatus } from '../../../libs/utils';
import { Task, TaskStatus } from '../../../redux/modules/task';
import styles from './index.module.scss';

type Props = {
  status: TaskStatus;
  assignedTasks: Task[];
};
export const TaskCardList: React.VFC<Props> = ({ status, assignedTasks }) => (
  <div className={styles.root}>
    <h3>{toStringStatus(status)}</h3>
    <ul>
      {assignedTasks
        .filter((task) => task.status === status)
        .map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
    </ul>
  </div>
);
