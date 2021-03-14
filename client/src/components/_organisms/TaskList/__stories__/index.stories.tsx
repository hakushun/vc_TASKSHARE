import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TaskList, Props } from '../TaskList';

export default {
  title: 'organisms/TaskList',
  component: TaskList,
} as Meta;

const Template: Story<Props> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  context: 'open',
  tasks: [
    {
      description: '',
      projectId: 'BrwxFAMxgx2r6NYHjdiZ',
      dueDate: '2021-01-31',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      startDate: '2021-01-05',
      createdAt: 1609825739170,
      updatedAt: 1610609071702,
      title: 'ガントチャート',
      id: 'AI3Y4Tuth6ICvRVDDtvE',
      assignTo: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      status: 'COMPLETE',
    },
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
};
