import React from 'react';
import { Task } from '../../../redux/modules/task';
import { calculateProgress } from '../../../redux/modules/tasks';
import styles from './index.module.scss';

export type Props = {
  tasks: Task[];
  projectId: string;
};
export const Progress: React.VFC<Props> = ({ tasks, projectId }) => (
  <div className={styles.root}>
    <span className={styles.text}>{`${calculateProgress(
      tasks,
      projectId,
    )}%`}</span>
    <progress
      className={styles.bar}
      value={calculateProgress(tasks, projectId)}
      max="100"></progress>
  </div>
);
