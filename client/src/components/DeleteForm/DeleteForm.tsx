import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import {
  composeValidators,
  isEmail,
  isRequired,
  minValue,
} from '../../libs/validations';
import { Loading } from '../Loading';

type Props = {
  isLoading: boolean;
  closeModal: () => void;
  handleRemove: (_value: { email: string; password: string }) => void;
};
export const DeleteForm: React.VFC<Props> = ({
  isLoading,
  closeModal,
  handleRemove,
}) => (
  <Overlay>
    <section className={styles.root}>
      <button
        type="button"
        aria-label="閉じる"
        className={styles.close}
        onClick={() => closeModal()}>
        <img src="/images/icon-x.svg" alt="閉じる" width="40" height="40" />
      </button>
      <Form
        onSubmit={handleRemove}
        subscription={{ submitting: true }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Delete Account Form</h2>
              </legend>
              <Field
                name="email"
                validate={composeValidators(isRequired, isEmail)}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      disabled={isLoading}
                      className={styles.input}
                      {...input}
                    />
                    <div className={styles.error}>
                      {meta.touched && meta.error && meta.error}
                    </div>
                  </div>
                )}
              </Field>
              <Field
                name="password"
                validate={composeValidators(isRequired, minValue(6))}
                subscription={{
                  value: true,
                  active: true,
                  error: true,
                  touched: true,
                }}>
                {({ input, meta }) => (
                  <div className={styles.inputWrapper}>
                    <label htmlFor="password" className={styles.label}>
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      disabled={isLoading}
                      className={styles.input}
                      {...input}
                    />
                    <div className={styles.error}>
                      {meta.touched && meta.error && meta.error}
                    </div>
                  </div>
                )}
              </Field>
            </fieldset>
            <div className={styles.actionWrapper}>
              {isLoading ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={styles.action}>
                  Delete Account
                </button>
              )}
            </div>
          </form>
        )}
      />
    </section>
  </Overlay>
);
