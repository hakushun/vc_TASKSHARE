import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './index.module.scss';
import { Overlay } from '../Overlay';
import { composeValidators, isEmail, isRequired } from '../../libs/validations';
import { Loading } from '../Loading';
import { Required } from '../Badge/Required';
import { CloseButton } from '../_atoms/CloseButton';

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
      <CloseButton handleClose={closeModal} />¥
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
