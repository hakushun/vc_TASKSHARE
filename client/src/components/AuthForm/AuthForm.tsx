import React from 'react';
import { Form } from 'react-final-form';
import { Loading } from '../_atoms/Loading';
import { FormWrapper } from '../_molecules/FormWrapper';
import styles from './index.module.scss';
import { TextField } from '../_molecules/TextField';

type Props = {
  type: 'signup' | 'signin';
  isLoading: boolean;
  onSubmit: (_value: { email: string; password: string }) => void;
  signinWithGoogle: () => void;
};
export const AuthForm: React.VFC<Props> = ({
  type,
  isLoading,
  onSubmit,
  signinWithGoogle,
}) => (
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
        <div className={styles.actionWrapper}>
          {isLoading ? (
            <Loading />
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className={styles.action}>
              {type === 'signup' ? 'Create Account' : 'Log In'}
            </button>
          )}
        </div>
        <div className={styles.provider}>
          <button
            type="button"
            className={styles.google}
            aria-label="Sign In with Google account"
            onClick={() => signinWithGoogle()}>
            <img
              className={styles.googleImg}
              alt="Google icon"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              width="18"
              height="18"
            />
            <span className={styles.googleText}>Sign in with Google</span>
          </button>
        </div>
      </FormWrapper>
    )}
  />
);
