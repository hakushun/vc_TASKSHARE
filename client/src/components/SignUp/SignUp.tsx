import React from 'react';
import { AuthForm } from '../AuthForm';
import { Dialog } from '../Dialog';

type Props = {
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
    <AuthForm type="signup" isLoading={isLoading} onSubmit={signup} />
  </>
);
