import React from 'react';
import styles from './index.module.scss';

export const Home: React.VFC = () => (
  <section className={styles.home}>
    <div className={styles.inner}>
      <img src="/images/logo_l.png" alt="TASKSHAREのlogo" />
    </div>
  </section>
);
