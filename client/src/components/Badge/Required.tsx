import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export const Required: React.VFC = () => (
  <span className={clsx(styles.badge, styles.required)}>Required</span>
);
