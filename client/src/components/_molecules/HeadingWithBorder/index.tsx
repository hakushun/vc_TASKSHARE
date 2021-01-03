import React from 'react';
import styles from './index.module.scss';

type Props = {
  title: string;
};
export const HeadingWithBorder: React.FC<Props> = ({ title, children }) => (
  <div className={styles.root}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);
