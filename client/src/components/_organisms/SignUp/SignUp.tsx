import Link from 'next/link';
import React from 'react';
import { AuthForm } from '../AuthForm';
import { Dialog } from '../Dialog';
import styles from './index.module.scss';

export type Props = {
  isOpend: boolean;
  message: { title: string; description: string };
  isLoading: boolean;
  signup: (_value: { email: string; password: string }) => Promise<void>;
};

export const SignUp: React.VFC<Props> = ({
  isOpend,
  message,
  isLoading,
  signup,
}) => (
  <>
    {isOpend && <Dialog message={message} />}
    <section className={styles.wrapper}>
      <AuthForm type="signup" isLoading={isLoading} onSubmit={signup} />
    </section>
    <div className={styles.annotation}>
      If you have an account, please{' '}
      <Link href="signin">
        <a>Login now</a>
      </Link>
    </div>
  </>
);
