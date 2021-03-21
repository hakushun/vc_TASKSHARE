import React from 'react';
import styles from './index.module.scss';

export const ViewSwitch: React.VFC = () => (
  <div className={styles.root}>
    <dl className={styles.list}>
      <dd className={styles.definition}>View:</dd>
      <dt>
        <input
          className={styles.radio}
          type="radio"
          name="view"
          id="view_list"
          checked
        />
        <label className={styles.label} htmlFor="view_list">
          List
        </label>
      </dt>
      <dt>
        <input
          className={styles.radio}
          type="radio"
          name="view"
          id="view_board"
        />
        <label className={styles.label} htmlFor="view_board">
          Board
        </label>
      </dt>
    </dl>
  </div>
);
