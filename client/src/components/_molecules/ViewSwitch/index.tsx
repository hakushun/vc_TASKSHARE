import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, View, selectCurrentView } from '../../../redux/modules/view';
import { ViewSwitch as Presentational } from './ViewSwitch';

export const ViewSwitch: React.VFC = () => {
  const dispatch = useDispatch();
  const currentView = useSelector(selectCurrentView);

  const handleChangeView = (value: View) => {
    dispatch(change(value));
  };

  return (
    <Presentational
      currentView={currentView}
      handleChangeView={handleChangeView}
    />
  );
};
