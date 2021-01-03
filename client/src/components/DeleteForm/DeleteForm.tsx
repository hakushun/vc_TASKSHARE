import React from 'react';
import { Form } from 'react-final-form';
import styles from './index.module.scss';
import { Loading } from '../_atoms/Loading';
import { CloseButton } from '../_atoms/CloseButton';
import { InputLabel } from '../_atoms/InputLabel';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';
import { TextInput } from '../_atoms/TextInput';
import { RequiredBadge } from '../_atoms/RequiredBadge';

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
              disabled={isLoading}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.labelWrapper}>
              <InputLabel id="password" label="Password" />
              <RequiredBadge />
            </div>
            <TextInput
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              disabled={isLoading}
              autoComplete="current-password"
              minLength={6}
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
                Delete Account
              </button>
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
