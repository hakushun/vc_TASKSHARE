import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusList } from '../../../redux/modules/dropdown';
import { selectTask } from '../../../redux/modules/task';
import { StatusButton as Presentational } from './StatusButton';

export const StatusButton: React.VFC = () => {
  const dispatch = useDispatch();
  const task = useSelector(selectTask);

  const toggleList = () => {
    dispatch(toggleStatusList());
  };
  return <Presentational task={task} toggleList={toggleList} />;
};
