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
  isLoading: boolean;
  closeModal: () => void;
  handleRemove: (_value: { email: string; password: string }) => void;
};
export const DeleteForm: React.VFC<Props> = ({
  isLoading,
  closeModal,
  handleRemove,
}) => (
  <ModalWrapper>
    <CloseButton handleClose={closeModal} />
    <Form
      onSubmit={handleRemove}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <FormWrapper title="Delete Account Form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            disabled={isLoading}
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            disabled={isLoading}
            autoComplete="current-password"
            minLength={6}
            required
          />
          <div className={styles.buttonWrapper}>
            {isLoading ? (
              <Loading />
            ) : (
              <PrimaryButton
                label="Delete Account"
                type="submit"
                disabled={isLoading}
              />
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
