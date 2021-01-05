import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './index.module.scss';
import {
  change,
  DueDateFilterValue,
  selectFilter,
  StartedFilterValue,
} from '../../../redux/modules/filter';

export const FilterController: React.VFC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleStartedFilter = (value: StartedFilterValue) => {
    dispatch(change({ started: value }));
  };
  const handleDueDateFilter = (value: DueDateFilterValue) => {
    dispatch(change({ dueDate: value }));
  };

  return (
    <div className={styles.root}>
      <dl className={styles.list}>
        <dt className={styles.key}>Started :</dt>
        <dd className={styles.item}>
          <button
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
            className={clsx(
              styles.button,
              filter.started === 'started' && styles.active,
            )}
            onClick={() => handleStartedFilter('started')}>
            Started
          </button>
        </dd>
      </dl>
      <dl className={styles.list}>
        <dt className={styles.key}>Due date :</dt>
        <dd className={styles.item}>
          <button
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
};
