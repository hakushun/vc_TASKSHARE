import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TaskListHeader, Props } from '../TaskListHeader';

export default {
  title: 'molecules/TaskListHeader',
  component: TaskListHeader,
} as Meta;

const Template: Story<Props> = (args) => <TaskListHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  context: 'open',
  tasksSort: {
    projects: { key: 'progress', order: 'up' },
    tasks: { key: 'dueDate', order: 'up' },
  },
  handleSrotTasks: action('handleSrotTasks'),
};
