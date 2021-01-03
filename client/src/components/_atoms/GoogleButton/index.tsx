import React from 'react';
import { useAuth } from '../../../libs/auth/useAuth';
import styles from './index.module.scss';

export const GoogleButton: React.FC = () => {
  const { signinWithGoogle } = useAuth();

  return (
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
  );
};
