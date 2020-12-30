import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/modules/user';
import { Header as Presentational } from './Header';
import { useAuth } from '../../libs/auth/useAuth';
import { toggleBargerMenu } from '../../redux/modules/bargerMenu';

export const Header: React.VFC = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);
  const { logout } = useAuth();

  const handletoggle = () => {
    dispatch(toggleBargerMenu());
  };
  return (
    <Presentational
      isAuth={isAuth}
      logout={logout}
      handletoggle={handletoggle}
    />
  );
};
