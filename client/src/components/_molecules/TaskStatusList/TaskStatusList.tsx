import React from 'react';
import { StatusListButton } from '../../_atoms/StatusListButton';
import styles from './index.module.scss';

export const TaskStatusList: React.VFC = () => (
  <ul className={styles.root}>
    <StatusListButton label="New" status="NEW" />
    <StatusListButton label="WIP" status="IN_PROGRESS" />
    <StatusListButton label="Reviewing" status="REVIEWING" />
    <StatusListButton label="Complete" status="COMPLETE" />
  </ul>
);
