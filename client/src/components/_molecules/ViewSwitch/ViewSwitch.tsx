import React from 'react';
import { View } from '../../../redux/modules/view';
import styles from './index.module.scss';

type Props = {
  currentView: View;
  handleChangeView: (_value: View) => void;
};
export const ViewSwitch: React.VFC<Props> = ({
  currentView,
  handleChangeView,
}) => (
  <div className={styles.root}>
    <dl className={styles.list}>
      <dd className={styles.definition}>View:</dd>
      <dt>
        <input
          className={styles.radio}
          type="radio"
          name="view"
          id="view_list"
          checked={currentView === 'list'}
          onChange={() => handleChangeView('list')}
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
          checked={currentView === 'board'}
          onChange={() => handleChangeView('board')}
        />
        <label className={styles.label} htmlFor="view_board">
          Board
        </label>
      </dt>
    </dl>
  </div>
);
