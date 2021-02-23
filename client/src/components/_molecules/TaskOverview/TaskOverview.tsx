import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { getStringDate } from '../../../libs/date';
import { Task } from '../../../redux/modules/task';
import { Userdata } from '../../../redux/modules/users';

export type Props = {
  task: Task;
  assignUer: Userdata | undefined;
  createUer: Userdata | undefined;
};
export const TaskOverview: React.VFC<Props> = ({
  task,
  assignUer,
  createUer,
}) => (
  <div className={styles.inner}>
    <dl className={clsx(styles.item, styles.description)}>
      <dt className={styles.label}>Description</dt>
      <dd className={styles.detail}>{task.description}</dd>
    </dl>
    <dl className={clsx(styles.item, styles.assignTo)}>
      <dt className={styles.label}>Assign to</dt>
      <dd className={styles.definition}>
        {assignUer?.username || 'undefined'}
      </dd>
    </dl>
    <dl className={clsx(styles.item, styles.createdBy)}>
      <dt className={styles.label}>Created By</dt>
      <dd className={styles.definition}>
        {createUer?.username || 'undefined'}
      </dd>
    </dl>
    <dl className={clsx(styles.item, styles.startDate)}>
      <dt className={styles.label}>Start Date</dt>
      <dd className={styles.definition}>{getStringDate(task.startDate)}</dd>
    </dl>
    <dl className={clsx(styles.item, styles.dueDate)}>
      <dt className={styles.label}>Due Date</dt>
      <dd className={styles.definition}>{getStringDate(task.dueDate)}</dd>
    </dl>
    <dl className={clsx(styles.item, styles.createdAt)}>
      <dt className={styles.label}>Created at</dt>
      <dd className={styles.definition}>{getStringDate(task.createdAt!)}</dd>
    </dl>
    <dl className={clsx(styles.item, styles.updatedAt)}>
      <dt className={styles.label}>Updated at</dt>
      <dd className={styles.definition}>{getStringDate(task.updatedAt!)}</dd>
    </dl>
  </div>
);
