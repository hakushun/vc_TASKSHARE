import React from 'react';
import { Form } from 'react-final-form';
import styles from './index.module.scss';
import { Loading } from '../_atoms/Loading';
import { CloseButton } from '../_atoms/CloseButton';
import { RequiredBadge } from '../_atoms/RequiredBadge';
import { InputLabel } from '../_atoms/InputLabel';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import { TextInput } from '../_atoms/TextInput';

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
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="email" label="Email" />
              <RequiredBadge />
            </div>
            <TextInput
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              disabled={submitting}
              required
            />
          </div>
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
