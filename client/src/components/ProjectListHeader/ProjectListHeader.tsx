import React from 'react';
import { ProjectsSortKey } from '../../redux/modules/sort';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  projectsSortKey: ProjectsSortKey;
  handleSrotProjects: (_key: 'progress' | 'openTask') => void;
};
export const ProjectListHeader: React.VFC<Props> = ({
  context,
  projectsSortKey,
  handleSrotProjects,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      {context === 'close' ? (
        <div className={styles.progress}>Progress</div>
      ) : (
        <button
          type="button"
          className={styles.progress}
          onClick={() => handleSrotProjects('progress')}>
          Progress
          <img
            src={
              projectsSortKey.progress === 'up'
                ? '/images/icon-sort-ascending.svg'
                : '/images/icon-sort-descending.svg'
            }
            alt={projectsSortKey.progress === 'up' ? '昇順' : '降順'}
            width="18px"
            height="18px"
            className={styles.icon}
          />
        </button>
      )}
      <span className={styles.name}>Title</span>
      {context === 'close' ? (
        <div className={styles.openTask}>Open Task</div>
      ) : (
        <button
          type="button"
          className={styles.openTask}
          onClick={() => handleSrotProjects('openTask')}>
          Open Task
          <img
            src={
              projectsSortKey.openTask === 'up'
                ? '/images/icon-sort-ascending.svg'
                : '/images/icon-sort-descending.svg'
            }
            alt={projectsSortKey.openTask === 'up' ? '昇順' : '降順'}
            width="18px"
            height="18px"
            className={styles.icon}
          />
        </button>
      )}
    </div>
  </div>
);
