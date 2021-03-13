import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GoogleButton } from '..';

export default {
  title: 'atoms/GoogleButton',
  component: GoogleButton,
} as Meta;

const Template: Story = (args) => <GoogleButton {...args} />;

export const Default = Template.bind({});
