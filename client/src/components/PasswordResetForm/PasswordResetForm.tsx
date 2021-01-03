import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './index.module.scss';
import { composeValidators, isEmail, isRequired } from '../../libs/validations';
import { Loading } from '../_atoms/Loading';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';

type Props = {
  closeModal: () => void;
  handleReset: (_value: { email: string }) => void;
};
export const PasswordResetForm: React.VFC<Props> = ({
  closeModal,
  handleReset,
}) => (
  <ModalWrapper>
    <CloseButton handleClose={closeModal} />
    <Form
      onSubmit={handleReset}
      subscription={{ submitting: true }}
      render={({ handleSubmit, submitting }) => (
        <FormWrapper title="Password Reset Form" onSubmit={handleSubmit}>
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
                  <InputLabel id="email" label="Email" />
                  <RequiredBadge />
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
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
