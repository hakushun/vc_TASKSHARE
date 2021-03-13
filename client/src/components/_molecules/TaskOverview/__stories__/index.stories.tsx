import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TaskOverview, Props } from '../TaskOverview';

export default {
  title: 'molecules/TaskOverview',
  component: TaskOverview,
} as Meta;

const Template: Story<Props> = (args) => <TaskOverview {...args} />;

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
  assignUer: {
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    updatedAt: 1609737325723,
    username: 'Shun',
    createdAt: 1609226313258,
  },
  createUer: {
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    updatedAt: 1609737325723,
    username: 'Shun',
    createdAt: 1609226313258,
  },
};
