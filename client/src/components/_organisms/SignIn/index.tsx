import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../../libs/auth/useAuth';
import {
  selectDialog,
  selectDialogMessage,
} from '../../../redux/modules/dialog';
import { toggleResetPasswordForm } from '../../../redux/modules/modal';
import { SignIn as Presentational } from './SignIn';

export const SignIn: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const { isLoading, signin } = useAuth();

  const openResetPasswordForm = () => {
    dispatch(toggleResetPasswordForm(true));
  };
  return (
    <Presentational
      isOpend={dialogIsOpened}
      message={dialogMessage}
      isLoading={isLoading}
      signin={signin}
      openResetPasswordForm={openResetPasswordForm}
    />
  );
};
