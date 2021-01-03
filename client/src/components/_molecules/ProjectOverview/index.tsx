import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './index.module.scss';
import { getStringDate } from '../../../libs/date';
import { selectProject } from '../../../redux/modules/project';
import {
  selectOwner,
  selectUserCreateProject,
} from '../../../redux/modules/users';

export const ProjectOverview: React.VFC = () => {
  const project = useSelector(selectProject);
  const owner = useSelector(selectOwner);
  const createUser = useSelector(selectUserCreateProject);

  return (
    <div className={styles.root}>
      <dl className={clsx(styles.item, styles.description)}>
        <dt className={styles.label}>Detail</dt>
        <dd className={styles.detail}>{project.detail}</dd>
      </dl>
      <dl className={clsx(styles.item, styles.owner)}>
        <dt className={styles.label}>Owner</dt>
        <dd className={styles.definition}>{owner?.username || 'undefined'}</dd>
      </dl>
      <dl className={clsx(styles.item, styles.createdBy)}>
        <dt className={styles.label}>Created By</dt>
        <dd className={styles.definition}>
          {createUser?.username || 'undefined'}
        </dd>
      </dl>
      <dl className={clsx(styles.item, styles.startDate)}>
        <dt className={styles.label}>Start Date</dt>
        <dd className={styles.definition}>
          {getStringDate(project.startDate)}
        </dd>
      </dl>
      <dl className={clsx(styles.item, styles.dueDate)}>
        <dt className={styles.label}>Due Date</dt>
        <dd className={styles.definition}>{getStringDate(project.dueDate)}</dd>
      </dl>
      <dl className={clsx(styles.item, styles.createdAt)}>
        <dt className={styles.label}>Created at</dt>
        <dd className={styles.definition}>
          {getStringDate(project.createdAt!)}
        </dd>
      </dl>
      <dl className={clsx(styles.item, styles.updatedAt)}>
        <dt className={styles.label}>Updated at</dt>
        <dd className={styles.definition}>
          {getStringDate(project.updatedAt!)}
        </dd>
      </dl>
    </div>
  );
};
