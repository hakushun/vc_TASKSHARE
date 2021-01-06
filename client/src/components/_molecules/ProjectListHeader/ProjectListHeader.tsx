import React from 'react';
import { ProjectsSort } from '../../../redux/modules/sort';
import styles from './index.module.scss';

type Props = {
  context: 'open' | 'close';
  projectsSort: ProjectsSort;
  handleSrotProjects: (_key: 'owner' | 'progress') => void;
};
export const ProjectListHeader: React.VFC<Props> = ({
  context,
  projectsSort,
  handleSrotProjects,
}) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      {context === 'close' ? (
        <div className={styles.owner}>Owner</div>
      ) : (
        <button
          type="button"
          className={styles.owner}
          onClick={() => handleSrotProjects('owner')}>
          Owner
          {projectsSort.key === 'owner' && (
            <img
              src={
                projectsSort.order === 'up'
                  ? '/images/icon-sort-ascending.svg'
                  : '/images/icon-sort-descending.svg'
              }
              alt={projectsSort.order === 'up' ? '昇順' : '降順'}
              width="18px"
              height="18px"
              className={styles.icon}
            />
          )}
        </button>
      )}
      <span className={styles.name}>Title</span>
      {context === 'close' ? (
        <div className={styles.progress}>Progress</div>
      ) : (
        <button
          type="button"
          className={styles.progress}
          onClick={() => handleSrotProjects('progress')}>
          Progress
          {projectsSort.key === 'progress' && (
            <img
              src={
                projectsSort.order === 'up'
                  ? '/images/icon-sort-ascending.svg'
                  : '/images/icon-sort-descending.svg'
              }
              alt={projectsSort.order === 'up' ? '昇順' : '降順'}
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
