import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './index.module.scss';
import {
  composeValidators,
  isEmail,
  isRequired,
  minValue,
} from '../../libs/validations';
import { Loading } from '../_atoms/Loading';
import { CloseButton } from '../_atoms/CloseButton';
import { InputLabel } from '../_atoms/InputLabel';
import { FormWrapper } from '../_molecules/FormWrapper';
import { ModalWrapper } from '../_molecules/ModalWrapper';

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
                <InputLabel id="email" label="Email" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  disabled={isLoading}
                  className={styles.input}
                  required
                  aria-required
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
                <InputLabel id="password" label="Password" />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  disabled={isLoading}
                  className={styles.input}
                  required
                  aria-required
                  {...input}
                />
                <div className={styles.error}>
                  {meta.touched && meta.error && meta.error}
                </div>
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
                Delete Account
              </button>
            )}
          </div>
        </FormWrapper>
      )}
    />
  </ModalWrapper>
);
