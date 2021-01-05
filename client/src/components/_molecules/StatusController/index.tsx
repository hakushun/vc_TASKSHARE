import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { change, selectFilter } from '../../../redux/modules/filter';
import styles from './index.module.scss';

export const StatusController: React.VFC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleToggleSwitch = () => {
    dispatch(change({ complete: !filter.complete }));
  };

  return (
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
};
