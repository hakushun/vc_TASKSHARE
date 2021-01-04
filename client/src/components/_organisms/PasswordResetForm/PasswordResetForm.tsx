import React from 'react';
import { Form } from 'react-final-form';
import styles from './index.module.scss';
import { Loading } from '../../_atoms/Loading';
import { CloseButton } from '../../_atoms/CloseButton';
import { FormWrapper } from '../../_molecules/FormWrapper';
import { ModalWrapper } from '../../_molecules/ModalWrapper';
import { TextField } from '../../_molecules/TextField';
import { PrimaryButton } from '../../_atoms/PrimaryButton';

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
          <TextField
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            disabled={submitting}
            required
          />
          <div className={styles.buttonWrapper}>
            {submitting ? (
              <Loading />
            ) : (
              <PrimaryButton
                label="Send Email"
                type="submit"
                disabled={submitting}
              />
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
