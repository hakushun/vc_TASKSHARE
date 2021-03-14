import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SignIn, Props } from '../SignIn';

export default {
  title: 'organisms/SignIn',
  component: SignIn,
} as Meta;

const Template: Story<Props> = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpend: false,
  message: { title: 'title', description: 'description' },
  isLoading: false,
  signin: action('signin'),
  openResetPasswordForm: action('openResetPasswordForm'),
};
