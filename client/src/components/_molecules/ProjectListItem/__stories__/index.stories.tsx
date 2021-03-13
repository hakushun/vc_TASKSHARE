import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ProjectListItem, Props } from '../ProjectListItem';

export default {
  title: 'molecules/ProjectListItem',
  component: ProjectListItem,
} as Meta;

const Template: Story<Props> = (args) => <ProjectListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
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
  tasks: [
    {
      assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      projectId: '9tAi4sXUiVpfabI7Yy2J',
      startDate: '2021-01-30',
      createdAt: 1611978962326,
      title: 'LT: Custom Hooks',
      status: 'COMPLETE',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      description: '',
      dueDate: '2021-02-09',
      id: 'Spmx2ceXdRgqZLDKJc9v',
      updatedAt: 1613006325924,
    },
    {
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      id: 'jYthwQANpyTZ7iRXE7sU',
      dueDate: '2021-02-09',
      createdAt: 1612677871636,
      description: '',
      projectId: '9tAi4sXUiVpfabI7Yy2J',
      status: 'COMPLETE',
      startDate: '2021-02-07',
      assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      title: 'Zenn: Custom Hooks',
      updatedAt: 1612857877971,
    },
    {
      status: 'NEW',
      projectId: 'cxKt5Tr6a8jOjCUaTKsP',
      description: '',
      id: 'nAnukCEf6FOQMEi7HX36',
      title: '参加アンケート送信',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      startDate: '2021-01-09',
      dueDate: '2021-02-28',
      assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      updatedAt: 1611978929330,
      createdAt: 1609578235373,
    },
    {
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
  ],
  users: [
    {
      id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      updatedAt: 1609737325723,
      username: 'Shun',
      createdAt: 1609226313258,
    },
    {
      username: 'テストユーザ',
      createdAt: 1609554463673,
      id: 'lMMJgdULRHag8VUGcPtKPoYHYHU2',
      updatedAt: 1609565741027,
    },
  ],
  handleFocus: action('handleFocus'),
};
