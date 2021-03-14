import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { PasswordResetForm, Props } from '../PasswordResetForm';

export default {
  title: 'organisms/PasswordResetForm',
  component: PasswordResetForm,
} as Meta;

const Template: Story<Props> = (args) => <PasswordResetForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  closeModal: action('closeModal'),
  handleReset: action('handleReset'),
};
