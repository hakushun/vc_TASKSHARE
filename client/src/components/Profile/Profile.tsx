import React from 'react';
import { Form } from 'react-final-form';
import { Userdata } from '../../redux/modules/users';
import { DeleteForm } from '../DeleteForm';
import { Loading } from '../_atoms/Loading';
import { DeleteButton } from '../_atoms/DeleteButton';
import { FormWrapper } from '../_molecules/FormWrapper';
import styles from './index.module.scss';
import { TextField } from '../_molecules/TextField';
import { PrimaryButton } from '../_atoms/PrimaryButton';

type Props = {
  initialValues: Userdata;
  isLoading: boolean;
  handleUpdate: (_value: Userdata) => void;
  openModal: () => void;
};
export const Profile: React.VFC<Props> = ({
  initialValues,
  isLoading,
  handleUpdate,
  openModal,
}) => (
  <>
    <DeleteForm />
    <section className={styles.profile}>
      <Form
        onSubmit={handleUpdate}
        subscription={{ submitting: true }}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <FormWrapper title="Profile" onSubmit={handleSubmit}>
            <TextField
              label="User name"
              type="text"
              name="username"
              id="profile_username"
              placeholder="User name"
              disabled={isLoading}
              maxLength={50}
              required
            />
            <div className={styles.buttonWrapper}>
              {isLoading ? (
                <Loading />
              ) : (
                <PrimaryButton
                  label="Update"
                  type="submit"
                  disabled={isLoading}
                />
              )}
            </div>
          </FormWrapper>
        )}
      />
      <DeleteButton target="アカウント" handleOpen={openModal} />
    </section>
  </>
);
