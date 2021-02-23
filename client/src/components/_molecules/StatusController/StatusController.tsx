import React from 'react';
import clsx from 'clsx';
import { Filter } from '../../../redux/modules/filter';
import styles from './index.module.scss';

export type Props = {
  filter: Filter;
  handleToggleSwitch: () => void;
};
export const StatusController: React.VFC<Props> = ({
  filter,
  handleToggleSwitch,
}) => (
  <div className={styles.root}>
    <input
      id="toggle_switch"
      type="checkbox"
      checked={filter.complete}
      className={styles.input}
      onChange={() => handleToggleSwitch()}
    />
    <label
      htmlFor="toggle_switch"
      className={clsx(styles.label, filter.complete && styles.active)}>
      <span className={styles.text}>Show Comlete Tasks</span>
    </label>
  </div>
);
