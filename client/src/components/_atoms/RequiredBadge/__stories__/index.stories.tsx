import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RequiredBadge } from '..';

export default {
  title: 'atoms/RequiredBadge',
  component: RequiredBadge,
} as Meta;

const Template: Story = (args) => <RequiredBadge {...args} />;

export const Default = Template.bind({});
