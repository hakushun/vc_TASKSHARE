import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import {
  DueDateFilterValue,
  Filter,
  StartedFilterValue,
} from '../../../redux/modules/filter';

export type Props = {
  filter: Filter;
  handleStartedFilter: (_value: StartedFilterValue) => void;
  handleDueDateFilter: (_value: DueDateFilterValue) => void;
};
export const FilterController: React.VFC<Props> = ({
  filter,
  handleStartedFilter,
  handleDueDateFilter,
}) => (
  <div className={styles.root}>
    <dl
      className={styles.list}
      aria-label="controller to filter tasks by started date">
      <dt className={styles.key}>Started :</dt>
      <dd className={styles.item}>
        <button
          aria-label="show all tasks"
          className={clsx(
            styles.button,
            filter.started === 'all' && styles.active,
          )}
          onClick={() => handleStartedFilter('all')}>
          All
        </button>
      </dd>
      <dd className={styles.item}>
        <button
          aria-label="show tasks have not started yet"
          className={clsx(
            styles.button,
            filter.started === 'notYet' && styles.active,
          )}
          onClick={() => handleStartedFilter('notYet')}>
          Not yet
        </button>
      </dd>
      <dd className={styles.item}>
        <button
          aria-label="show tasks have already started"
          className={clsx(
            styles.button,
            filter.started === 'started' && styles.active,
          )}
          onClick={() => handleStartedFilter('started')}>
          Started
        </button>
      </dd>
    </dl>
    <dl
      className={styles.list}
      aria-label="controller to filter tasks by due date">
      <dt className={styles.key}>Due date :</dt>
      <dd className={styles.item}>
        <button
          aria-label="show all tasks"
          className={clsx(
            styles.button,
            filter.dueDate === 'all' && styles.active,
          )}
          onClick={() => handleDueDateFilter('all')}>
          All
        </button>
      </dd>
      <dd className={styles.item}>
        <button
          aria-label="show tasks expire within three days"
          className={clsx(
            styles.button,
            filter.dueDate === 'whitin3days' && styles.active,
          )}
          onClick={() => handleDueDateFilter('whitin3days')}>
          Within 3 days
        </button>
      </dd>
      <dd className={styles.item}>
        <button
          aria-label="show tasks by today"
          className={clsx(
            styles.button,
            filter.dueDate === 'today' && styles.active,
          )}
          onClick={() => handleDueDateFilter('today')}>
          Today
        </button>
      </dd>
      <dd className={styles.item}>
        <button
          aria-label="show tasks expired due date"
          className={clsx(
            styles.button,
            filter.dueDate === 'expired' && styles.active,
          )}
          onClick={() => handleDueDateFilter('expired')}>
          Expired
        </button>
      </dd>
    </dl>
  </div>
);
