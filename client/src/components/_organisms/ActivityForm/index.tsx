import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  create,
  CreatePayload,
  selectIsLoading,
  update,
  UpdatePayload,
} from '../../../redux/modules/activities';
import { selectActivity } from '../../../redux/modules/activity';
import {
  selectDialog,
  selectDialogMessage,
} from '../../../redux/modules/dialog';
import {
  selectActivityForm,
  toggleActivityForm,
} from '../../../redux/modules/modal';
import { Dialog } from '../Dialog';
import { ActivityForm as Preasentational } from './ActivityForm';

export const ActivityForm: React.VFC = () => {
  const dispatch = useDispatch();
  const dialogIsOpened = useSelector(selectDialog);
  const dialogMessage = useSelector(selectDialogMessage);
  const formIsOpened = useSelector(selectActivityForm);
  const activity = useSelector(selectActivity);
  const isLoading = useSelector(selectIsLoading);
  const closeActivityModal = () => {
    dispatch(toggleActivityForm(false));
  };
  const createActivity = (data: CreatePayload) => {
    dispatch(create(data));
  };
  const updateActivity = (data: UpdatePayload) => {
    dispatch(update(data));
  };
  return (
    <>
      {dialogIsOpened && <Dialog message={dialogMessage} />}
      {formIsOpened && (
        <Preasentational
          initialValues={activity}
          isLoading={isLoading}
          closeActivityModal={closeActivityModal}
          createActivity={createActivity}
          updateActivity={updateActivity}
        />
      )}
    </>
  );
};
