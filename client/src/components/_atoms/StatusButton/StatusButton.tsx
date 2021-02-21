import React from 'react';
import { toStringStatus } from '../../../libs/utils';
import { Task } from '../../../redux/modules/task';
import styles from './index.module.scss';

export type Props = {
  task: Task;
  toggleList: () => void;
};
export const StatusButton: React.VFC<Props> = ({ task, toggleList }) => (
  <button className={styles.root} onClick={() => toggleList()}>
    {toStringStatus(task.status)}
  </button>
);
