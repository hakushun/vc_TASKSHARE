import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TaskStatusList } from '../TaskStatusList';

export default {
  title: 'molecules/TaskStatusList',
  component: TaskStatusList,
} as Meta;

const Template: Story = (args) => <TaskStatusList {...args} />;

export const Default = Template.bind({});
