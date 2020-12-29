import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { composeValidators, isEmail, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import { Required } from '../Badge/Required';

type Props = {
  closeModal: () => void;
  handleReset: (_value: { email: string }) => void;
};
export const PasswordResetForm: React.VFC<Props> = ({
  closeModal,
  handleReset,
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
        onSubmit={handleReset}
        subscription={{ submitting: true }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset>
              <legend>
                <h2 className={styles.title}>Password Reset Form</h2>
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
                    <div className={styles.labelWrapper}>
                      <label htmlFor="email" className={styles.label}>
                        Email
                      </label>
                      <Required />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      disabled={submitting}
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
              {submitting ? (
                <Loading />
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className={styles.action}>
                  Send Email
                </button>
              )}
            </div>
          </form>
        )}
      />
    </section>
  </Overlay>
);
