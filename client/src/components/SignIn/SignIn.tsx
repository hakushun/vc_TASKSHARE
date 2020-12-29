import Link from 'next/link';
import React from 'react';
import { AuthForm } from '../AuthForm';
import { Dialog } from '../Dialog';
import { PasswordResetForm } from '../PasswordResetForm';
import styles from './index.module.scss';

type Props = {
  isOpend: boolean;
  message: { title: string; description: string };
  isLoading: boolean;
  signin: (_value: { email: string; password: string }) => Promise<void>;
  openResetPasswordForm: () => void;
};

export const SignIn: React.VFC<Props> = ({
  isOpend,
  message,
  isLoading,
  signin,
  openResetPasswordForm,
}) => (
  <>
    <PasswordResetForm />
    <AuthForm type="signin" isLoading={isLoading} onSubmit={signin} />
    {isOpend && <Dialog message={message} />}
    <div className={styles.annotation}>
      If you do not have an account, please{' '}
      <Link href="signup">
        <a>Create Account</a>
      </Link>
    </div>
    <div className={styles.annotation}>
      If you forget password, please{' '}
      <button type="button" onClick={() => openResetPasswordForm()}>
        Reset Password
      </button>
    </div>
  </>
);
