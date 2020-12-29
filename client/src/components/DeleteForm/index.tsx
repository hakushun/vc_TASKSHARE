import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../libs/auth/useUser';
import { selectDialog, selectDialogMessage } from '../../redux/modules/dialog';
import { selectDeleteForm, toggleDeleteForm } from '../../redux/modules/modal';
import { Dialog } from '../Dialog';
import { DeleteForm as Presentational } from './DeleteForm';

export const DeleteForm: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const formIsOpened = useSelector(selectDeleteForm);
  const { isLoading, deleteUser } = useUser();

  const closeModal = () => {
    dispatch(toggleDeleteForm(false));
  };
  const handleRemove = (value: { email: string; password: string }) => {
    deleteUser(value);
  };
  return (
    <>
      {dialogIsOpened && <Dialog message={dialogMessage} />}
      {formIsOpened && (
        <Presentational
          isLoading={isLoading}
          closeModal={closeModal}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
};
