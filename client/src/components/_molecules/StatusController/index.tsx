import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, selectFilter } from '../../../redux/modules/filter';
import { StatusController as Presentational } from './StatusController';

export const StatusController: React.VFC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleToggleSwitch = () => {
    dispatch(change({ complete: !filter.complete }));
  };

  return (
    <Presentational filter={filter} handleToggleSwitch={handleToggleSwitch} />
  );
};
