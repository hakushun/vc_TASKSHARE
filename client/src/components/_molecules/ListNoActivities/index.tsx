import React from 'react';
import styles from './index.module.scss';

export const ListNoActivities: React.VFC = () => (
  <li className={styles.root}>
    <div className={styles.wrapper}>
      <p className={styles.empty}>No Activities</p>
    </div>
  </li>
);
