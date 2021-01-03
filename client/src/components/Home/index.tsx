import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

export const Home: React.VFC = () => (
  <section className={styles.home}>
    <div className={styles.inner}>
      <img src="/images/logo_l.png" alt="TASKSHAREのlogo" />
    </div>
    <div className={styles.linkWrapper}>
      <Link href="/signup">
        <a className={styles.link}>
          <img
            src="/images/icon-login.svg"
            alt="Get started"
            width="40"
            height="40"
          />
          GET STARTED
        </a>
      </Link>
    </div>
  </section>
);
