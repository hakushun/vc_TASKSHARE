import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export const Optional: React.VFC = () => (
  <span className={clsx(styles.badge, styles.optional)}>Optional</span>
);
