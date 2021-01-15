import React, { useEffect, useRef } from 'react';
import { AuthForm as Presentational } from './AuthForm';

type Props = {
  type: 'signup' | 'signin';
  isLoading: boolean;
  onSubmit: (_value: { email: string; password: string }) => Promise<void>;
};
export const AuthForm: React.VFC<Props> = ({ type, isLoading, onSubmit }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const handleSubmit = async (value: { email: string; password: string }) => {
    await onSubmit(value);
  };

  useEffect(() => {
    titleRef?.current?.focus();
  });

  return (
    <Presentational
      titleRef={titleRef}
      type={type}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};
