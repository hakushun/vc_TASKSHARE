import React from 'react';
import { useDispatch } from 'react-redux';
import { edit } from '../../../redux/modules/activity';
import { toggleConfirmation } from '../../../redux/modules/modal';
import { ActivityAction as Presentational } from './ActivityAction';

type Props = {
  id: string;
};
export const ActivityAction: React.VFC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const handleEdit = (activityId: string) => {
    dispatch(edit({ id: activityId }));
  };
  const openConfirmation = () => {
    dispatch(toggleConfirmation(true));
  };

  return (
    <Presentational
      id={id}
      handleEdit={handleEdit}
      openConfirmation={openConfirmation}
    />
  );
};
