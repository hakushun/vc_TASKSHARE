import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuth } from '../../helpers/withAuth';
import { useUser } from '../../libs/auth/useUser';
import { toggleDeleteForm } from '../../redux/modules/modal';
import { selectUser } from '../../redux/modules/user';
import { Userdata } from '../../redux/modules/users';
import { Profile as Presentational } from './Profile';

const Component: React.VFC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { isLoading, updateUsername } = useUser();

  const handleUpdate = (value: Userdata) => {
    updateUsername(value);
  };
  const openModal = () => {
    dispatch(toggleDeleteForm(true));
  };

  return (
    <Presentational
      initialValues={user}
      isLoading={isLoading}
      handleUpdate={handleUpdate}
      openModal={openModal}
    />
  );
};

export const Profile = withAuth(Component);
