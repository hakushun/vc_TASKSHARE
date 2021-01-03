import React from 'react';
import { AuthForm as Presentational } from './AuthForm';

type Props = {
  type: 'signup' | 'signin';
  isLoading: boolean;
  onSubmit: (_value: { email: string; password: string }) => Promise<void>;
};
export const AuthForm: React.VFC<Props> = ({ type, isLoading, onSubmit }) => {
  const handleSubmit = async (value: { email: string; password: string }) => {
    await onSubmit(value);
  };
  return (
    <Presentational type={type} isLoading={isLoading} onSubmit={handleSubmit} />
  );
};
