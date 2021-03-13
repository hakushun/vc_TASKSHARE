import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ActivityInfo, Props } from '../ActivityInfo';

export default {
  title: 'molecules/ActivityInfo',
  component: ActivityInfo,
} as Meta;

const Template: Story<Props> = (args) => <ActivityInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  userId: 'userId',
  updatedAt: new Date(),
  users: [],
};
