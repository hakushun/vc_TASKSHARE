import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../../../redux/modules/user';
import { BargerMenu as Presentational } from './BargerMenu';
import { useAuth } from '../../../libs/auth/useAuth';
import {
  selectBargerMenu,
  toggleBargerMenu,
} from '../../../redux/modules/bargerMenu';

export const BargerMenu: React.VFC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isOpened = useSelector(selectBargerMenu);
  const { logout } = useAuth();

  const handletoggle = () => {
    dispatch(toggleBargerMenu());
  };
  return (
    <>
      {isOpened && (
        <Presentational
          isAuth={isAuth}
          logout={logout}
          handletoggle={handletoggle}
        />
      )}
    </>
  );
};
