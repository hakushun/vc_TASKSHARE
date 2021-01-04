import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

export const GetStartedLink: React.VFC = () => (
  <Link href="/signup">
    <a className={styles.root}>
      <img
        src="/images/icon-login.svg"
        alt="Get started"
        width="40"
        height="40"
      />
      GET STARTED
    </a>
  </Link>
);
