import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toStringStatus } from '../../../libs/utils';
import { toggleStatusList } from '../../../redux/modules/dropdown';
import { selectTask } from '../../../redux/modules/task';
import styles from './index.module.scss';

export const StatusButton: React.VFC = () => {
  const dispatch = useDispatch();
  const task = useSelector(selectTask);

  const toggleList = () => {
    dispatch(toggleStatusList());
  };
  return (
    <button className={styles.root} onClick={() => toggleList()}>
      {toStringStatus(task.status)}
    </button>
  );
};
