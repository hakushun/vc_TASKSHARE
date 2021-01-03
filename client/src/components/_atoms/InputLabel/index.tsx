import React from 'react';
import styles from './index.module.scss';

type Props = {
  id: string;
  label: string;
};
export const InputLabel: React.VFC<Props> = ({ id, label }) => (
  <label htmlFor={id} className={styles.root}>
    {label}
  </label>
);
