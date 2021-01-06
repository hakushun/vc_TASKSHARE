import React from 'react';
import { TasksSort } from '../../../redux/modules/sort';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  tasksSort: TasksSort;
  handleSrotTasks: (_key: 'status' | 'dueDate') => void;
};
export const TaskListHeader: React.VFC<Props> = ({
  context,
  tasksSort,
  handleSrotTasks,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      {context === 'close' ? (
        <div className={styles.status}>Status</div>
      ) : (
        <button
          type="button"
          className={styles.status}
          onClick={() => handleSrotTasks('status')}>
          Status
          {tasksSort.key === 'status' && (
            <img
              src={
                tasksSort.order === 'up'
                  ? '/images/icon-sort-ascending.svg'
                  : '/images/icon-sort-descending.svg'
              }
              alt={tasksSort.order === 'up' ? '昇順' : '降順'}
              width="18px"
              height="18px"
              className={styles.icon}
            />
          )}
        </button>
      )}
      <span className={styles.name}>Title</span>
      {context === 'close' ? (
        <div className={styles.label}>Due Date</div>
      ) : (
        <button
          type="button"
          className={styles.label}
          onClick={() => handleSrotTasks('dueDate')}>
          Due Date
          {tasksSort.key === 'dueDate' && (
            <img
              src={
                tasksSort.order === 'up'
                  ? '/images/icon-sort-ascending.svg'
                  : '/images/icon-sort-descending.svg'
              }
              alt={tasksSort.order === 'up' ? '昇順' : '降順'}
              width="18px"
              height="18px"
              className={styles.icon}
            />
          )}
        </button>
      )}
    </div>
  </div>
);
