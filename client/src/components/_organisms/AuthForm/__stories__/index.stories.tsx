import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { AuthForm, Props } from '../AuthForm';

export default {
  title: 'organisms/AuthForm',
  component: AuthForm,
} as Meta;

const Template: Story<Props> = (args) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  return <AuthForm titleRef={titleRef} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: 'signin',
  isLoading: false,
  onSubmit: action('onSubmit'),
};
