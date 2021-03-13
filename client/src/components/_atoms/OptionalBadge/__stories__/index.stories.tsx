import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { OptionalBadge } from '..';

export default {
  title: 'atoms/OptionalBadge',
  component: OptionalBadge,
} as Meta;

const Template: Story = (args) => <OptionalBadge {...args} />;

export const Default = Template.bind({});
