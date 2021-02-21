import React from 'react';
import { TaskStatus } from '../../../redux/modules/task';
import styles from './index.module.scss';

export type Props = {
  label: string;
  status: TaskStatus;
  updateTaskStatus: (_taskStatus: TaskStatus) => void;
};
export const StatusListButton: React.VFC<Props> = ({
  label,
  status,
  updateTaskStatus,
}) => (
  <li className={styles.root}>
    <button
      type="button"
      className={styles.button}
      onClick={() => updateTaskStatus(status)}>
      {label}
    </button>
  </li>
);
