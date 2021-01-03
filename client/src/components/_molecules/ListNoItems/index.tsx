import React from 'react';
import styles from './index.module.scss';

export const ListNoItems: React.VFC = () => (
  <li className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.text}>No Items</div>
    </div>
  </li>
);
