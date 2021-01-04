import React from 'react';
import { GetStartedLink } from '../../_atoms/GetStartedLink';
import { LogoTop } from '../../_atoms/LogoTop';
import styles from './index.module.scss';

export const Home: React.VFC = () => (
  <section className={styles.home}>
    <div className={styles.inner}>
      <LogoTop />
    </div>
    <div className={styles.linkWrapper}>
      <GetStartedLink />
    </div>
  </section>
);
