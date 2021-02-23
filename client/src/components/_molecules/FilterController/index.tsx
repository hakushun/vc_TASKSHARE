import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  change,
  DueDateFilterValue,
  selectFilter,
  StartedFilterValue,
} from '../../../redux/modules/filter';
import { FilterController as Presentational } from './FilterController';

export const FilterController: React.VFC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleStartedFilter = (value: StartedFilterValue) => {
    dispatch(change({ started: value }));
  };
  const handleDueDateFilter = (value: DueDateFilterValue) => {
    dispatch(change({ dueDate: value }));
  };

  return (
    <Presentational
      filter={filter}
      handleStartedFilter={handleStartedFilter}
      handleDueDateFilter={handleDueDateFilter}
    />
  );
};
