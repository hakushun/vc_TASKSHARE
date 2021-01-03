import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  composeValidators,
  isEmail,
  isRequired,
  minValue,
} from '../../libs/validations';
import { Loading } from '../Loading';
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <fieldset>
          <legend>
            <h2 className={styles.title}>
              {type === 'signup' ? 'Sign Up' : 'Log In'}
            </h2>
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
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
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
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
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
        </fieldset>
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
      </form>
    )}
  />
);
