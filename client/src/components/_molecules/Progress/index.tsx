import React from 'react';
import { Task } from '../../../redux/modules/task';
import { calculateProgress } from '../../../redux/modules/tasks';
import styles from './index.module.scss';

type Props = {
  relatedTasks: Task[];
  projectId: string;
};
export const Progress: React.VFC<Props> = ({ relatedTasks, projectId }) => (
  <div className={styles.root}>
    <span className={styles.text}>{`${calculateProgress(
      relatedTasks,
      projectId,
    )}%`}</span>
    <progress
      className={styles.bar}
      value={calculateProgress(relatedTasks, projectId)}
      max="100"></progress>
  </div>
);
