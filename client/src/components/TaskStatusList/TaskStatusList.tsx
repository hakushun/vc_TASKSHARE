import React from 'react';
import { TaskStatus } from '../../redux/modules/task';
import styles from './index.module.scss';

type Props = {
  updateTaskStatus: (_status: TaskStatus) => void;
};
export const TaskStatusList: React.VFC<Props> = ({ updateTaskStatus }) => (
  <ul className={styles.statusList}>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => updateTaskStatus('NEW')}>
        New
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => updateTaskStatus('IN_PROGRESS')}>
        WIP
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => updateTaskStatus('REVIEWING')}>
        Reviewing
      </button>
    </li>
    <li className={styles.statusItem}>
      <button
        type="button"
        className={styles.statusButton}
        onClick={() => updateTaskStatus('COMPLETE')}>
        Complete
      </button>
    </li>
  </ul>
);
