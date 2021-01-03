import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDialog, selectDialogMessage } from '../../redux/modules/dialog';
import {
  selectConfirmation,
  toggleConfirmation,
} from '../../redux/modules/modal';
import { Dialog } from '../Dialog';
import { Confirmation as Presentational } from './Confirmation';

type Props = {
  isLoading: boolean;
  id: string;
  handleRemove: (_id: string) => void;
};
export const Confirmation: React.VFC<Props> = ({
  isLoading,
  id,
  handleRemove,
}) => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const isOpened = useSelector(selectConfirmation);

  const handleClose = () => {
    dispatch(toggleConfirmation(false));
  };
  return (
    <>
      {dialogIsOpened && <Dialog message={dialogMessage} />}
      {isOpened && (
        <Presentational
          isLoading={isLoading}
          id={id}
          handleRemove={handleRemove}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
