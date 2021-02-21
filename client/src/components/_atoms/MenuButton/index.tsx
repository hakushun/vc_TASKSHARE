import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleBargerMenu } from '../../../redux/modules/bargerMenu';
import { MenuButton as Presentational } from './MenuButton';

export const MenuButton: React.VFC = () => {
  const dispatch = useDispatch();

  const handletoggle = () => {
    dispatch(toggleBargerMenu());
  };
  return <Presentational handletoggle={handletoggle} />;
};
