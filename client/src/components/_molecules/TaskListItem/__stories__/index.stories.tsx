import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TaskListItem, Props } from '../TaskListItem';

export default {
  title: 'molecules/TaskListItem',
  component: TaskListItem,
} as Meta;

const Template: Story<Props> = (args) => <TaskListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    updatedAt: 1613715781955,
    dueDate: '2021-03-09',
    status: 'IN_PROGRESS',
    createdAt: 1611978975772,
    description: '',
    title: 'LT: 良いコードとは何か',
    startDate: '2021-02-10',
    userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    id: '5biodWSRHVB874NtTT05',
    projectId: '9tAi4sXUiVpfabI7Yy2J',
    assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
  },
  handleFocus: action('handleFocus'),
};
