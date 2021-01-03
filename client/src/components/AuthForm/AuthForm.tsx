import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  composeValidators,
  isEmail,
  isRequired,
  minValue,
} from '../../libs/validations';
import { Loading } from '../Loading';
import { InputLabel } from '../_atoms/InputLabel';
import { FormWrapper } from '../_molecules/FormWrapper';
import styles from './index.module.scss';

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
                autoComplete={
                  type === 'signup' ? 'new-password' : 'current-password'
                }
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
