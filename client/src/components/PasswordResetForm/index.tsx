import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../libs/auth/useUser';
import { selectDialog, selectDialogMessage } from '../../redux/modules/dialog';
import {
  selectResetPasswordForm,
  toggleResetPasswordForm,
} from '../../redux/modules/modal';
import { Dialog } from '../Dialog';
import { PasswordResetForm as Presentational } from './PasswordResetForm';

export const PasswordResetForm: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const formIsOpened = useSelector(selectResetPasswordForm);
  const { resetPassword } = useUser();

  const closeModal = () => {
    dispatch(toggleResetPasswordForm(false));
  };
  const handleReset = (value: { email: string }) => {
    resetPassword(value.email);
    dispatch(toggleResetPasswordForm(false));
  };
  return (
    <>
      {dialogIsOpened && <Dialog message={dialogMessage} />}
      {formIsOpened && (
        <Presentational closeModal={closeModal} handleReset={handleReset} />
      )}
    </>
  );
};
