import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Task, Props } from '../Task';

export default {
  title: 'organisms/Task',
  component: Task,
} as Meta;

const Template: Story<Props> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpened: false,
  project: {
    updatedAt: 1609643975327,
    ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    createdAt: 1609591469794,
    title: 'Output',
    userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    dueDate: '2021-12-31',
    detail: 'OutputするコンテンツをTaskにしていく',
    id: '9tAi4sXUiVpfabI7Yy2J',
    startDate: '2021-01-02',
  },
  task: {
    assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    title: 'LT: 良いコードとは何か',
    updatedAt: 1613715781955,
    dueDate: '2021-03-09',
    description: '',
    startDate: '2021-02-10',
    createdAt: 1611978975772,
    status: 'IN_PROGRESS',
    id: '5biodWSRHVB874NtTT05',
    userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    projectId: '9tAi4sXUiVpfabI7Yy2J',
  },
  relatedTasks: [],
  relatedActivities: [],
  user: {
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    updatedAt: 1609737325723,
    username: 'Shun',
    createdAt: 1609226313258,
  },
  isLoading: false,
  handleFocus: action('handleFocus'),
  handleAddTask: action('handleAddTask'),
  handleEditTask: action('handleEditTask'),
  handleAddActivity: action('handleRemoveProject'),
  handleRemoveTask: action('handleRemoveTask'),
  openConfirmation: action('openConfirmation'),
};
