import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ListNoActivities } from '..';

export default {
  title: 'molecules/ListNoActivities',
  component: ListNoActivities,
} as Meta;

const Template: Story = (args) => <ListNoActivities {...args} />;

export const Default = Template.bind({});
