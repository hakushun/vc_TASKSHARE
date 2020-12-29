import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../libs/auth/useAuth';
import { selectDialog, selectDialogMessage } from '../../redux/modules/dialog';
import { SignUp as Presentational } from './SignUp';

export const SignUp: React.VFC = () => {
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const { isLoading, signup } = useAuth();
  return (
    <Presentational
      isOpend={dialogIsOpened}
      message={dialogMessage}
      isLoading={isLoading}
      signup={signup}
    />
  );
};
