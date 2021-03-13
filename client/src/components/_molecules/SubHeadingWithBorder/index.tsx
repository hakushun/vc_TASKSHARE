import React from 'react';
import styles from './index.module.scss';

export type Props = {
  title: string;
};
export const SubHeadingWithBorder: React.FC<Props> = ({ title, children }) => (
  <div className={styles.root}>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </div>
);
