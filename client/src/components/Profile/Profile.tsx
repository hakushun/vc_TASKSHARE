import clsx from 'clsx';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { composeValidators, isRequired } from '../../libs/validations';
import { Userdata } from '../../redux/modules/users';
import { DeleteForm } from '../DeleteForm';
import { Loading } from '../Loading';
import { DeleteButton } from '../_atoms/DeleteButton';
import { FormWrapper } from '../_molecules/FormWrapper';
import styles from './index.module.scss';

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
            <Field
              name="username"
              validate={composeValidators(isRequired)}
              subscription={{
                value: true,
                active: true,
                error: true,
                touched: true,
              }}>
              {({ input, meta }) => (
                <div className={styles.inputWrapper}>
                  <div className={styles.labelWrapper}>
                    <label htmlFor="profile_username" className={styles.label}>
                      User name
                    </label>
                  </div>
                  <input
                    id="profile_username"
                    type="text"
                    placeholder="User name"
                    disabled={isLoading}
                    maxLength={50}
                    className={clsx(
                      styles.input,
                      meta.touched && meta.error && styles.hasError,
                    )}
                    required
                    aria-required
                    {...input}
                  />
                </div>
              )}
            </Field>
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
