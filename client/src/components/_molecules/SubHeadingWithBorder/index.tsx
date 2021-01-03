import React from 'react';
import styles from './index.module.scss';

type Porps = {
  title: string;
};
export const SubHeadingWithBorder: React.FC<Porps> = ({ title, children }) => (
  <div className={styles.root}>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </div>
);
