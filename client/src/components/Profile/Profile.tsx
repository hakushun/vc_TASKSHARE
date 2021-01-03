import React from 'react';
import { Form } from 'react-final-form';
import { Userdata } from '../../redux/modules/users';
import { DeleteForm } from '../DeleteForm';
import { Loading } from '../_atoms/Loading';
import { DeleteButton } from '../_atoms/DeleteButton';
import { FormWrapper } from '../_molecules/FormWrapper';
import styles from './index.module.scss';
import { TextInput } from '../_atoms/TextInput';

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
            <div className={styles.inputWrapper}>
              <div className={styles.labelWrapper}>
                <label htmlFor="profile_username" className={styles.label}>
                  User name
                </label>
              </div>
              <TextInput
                type="text"
                name="username"
                id="profile_username"
                placeholder="User name"
                disabled={isLoading}
                maxLength={50}
                required
              />
            </div>
            <div className={styles.actionWrapper}>
              {isLoading ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={styles.action}>
                  Update
                </button>
              )}
            </div>
          </FormWrapper>
        )}
      />
      <DeleteButton target="アカウント" handleOpen={openModal} />
    </section>
  </>
);
