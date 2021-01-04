import React from 'react';
import { Form } from 'react-final-form';
import { Loading } from '../../_atoms/Loading';
import { FormWrapper } from '../../_molecules/FormWrapper';
import styles from './index.module.scss';
import { TextField } from '../../_molecules/TextField';
import { GoogleButton } from '../../_atoms/GoogleButton';
import { PrimaryButton } from '../../_atoms/PrimaryButton';

type Props = {
  type: 'signup' | 'signin';
  isLoading: boolean;
  onSubmit: (_value: { email: string; password: string }) => void;
};
export const AuthForm: React.VFC<Props> = ({ type, isLoading, onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <FormWrapper
        title={type === 'signup' ? 'Sign Up' : 'Log In'}
        onSubmit={handleSubmit}>
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
          autoComplete={type === 'signup' ? 'new-password' : 'current-password'}
          minLength={6}
          required
        />
        <div className={styles.buttonWrapper}>
          {isLoading ? (
            <Loading />
          ) : (
            <PrimaryButton
              label={type === 'signup' ? 'Create Account' : 'Log In'}
              type="submit"
              disabled={isLoading}
            />
          )}
        </div>
        <div className={styles.provider}>
          <GoogleButton />
        </div>
      </FormWrapper>
    )}
  />
);
