import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Home } from '..';

export default {
  title: 'organisms/Home',
  component: Home,
} as Meta;

const Template: Story = (args) => <Home {...args} />;

export const Default = Template.bind({});
