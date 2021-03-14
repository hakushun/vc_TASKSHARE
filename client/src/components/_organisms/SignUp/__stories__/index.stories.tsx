import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SignUp, Props } from '../SignUp';

export default {
  title: 'organisms/SignUp',
  component: SignUp,
} as Meta;

const Template: Story<Props> = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpend: false,
  message: { title: 'title', description: 'description' },
  isLoading: false,
  signup: action('signup'),
};
