import clsx from 'clsx';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { composeValidators, isRequired } from '../../libs/validations';
import { User } from '../../redux/modules/user';
import { DeleteForm } from '../DeleteForm';
import { Loading } from '../Loading';
import styles from './index.module.scss';

type Props = {
  initialValues: User;
  isLoading: boolean;
  handleUpdate: (_value: User) => void;
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
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Profile</h2>
              </legend>
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
                      <label
                        htmlFor="profile_username"
                        className={styles.label}>
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
            </fieldset>
          </form>
        )}
      />
      <div>
        <button
          type="button"
          className={styles.delete}
          onClick={() => openModal()}>
          Delete
          <img
            src="/images/icon-trash.svg"
            alt="アカウントを削除する"
            width="20"
            height="20"
          />
        </button>
      </div>
    </section>
  </>
);
