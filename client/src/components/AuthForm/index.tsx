import React from 'react';
import { useAuth } from '../../libs/auth/useAuth';
import { AuthForm as Presentational } from './AuthForm';

type Props = {
  type: 'signup' | 'signin';
  isLoading: boolean;
  onSubmit: (_value: { email: string; password: string }) => Promise<void>;
};
export const AuthForm: React.VFC<Props> = ({ type, isLoading, onSubmit }) => {
  const { signinWithGoogle } = useAuth();

  const handleSubmit = async (value: { email: string; password: string }) => {
    await onSubmit(value);
  };
  return (
    <Presentational
      type={type}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      signinWithGoogle={signinWithGoogle}
    />
  );
};
