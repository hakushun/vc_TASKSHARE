import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../redux/modules/user';
import { Header as Presentational } from './Header';
import { useAuth } from '../../../libs/auth/useAuth';

export const Header: React.VFC = () => {
  const isAuth = useSelector(selectIsAuth);
  const { logout } = useAuth();
  return <Presentational isAuth={isAuth} logout={logout} />;
};
