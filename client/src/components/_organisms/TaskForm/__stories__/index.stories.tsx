import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TaskForm, Props } from '../TaskForm';

export default {
  title: 'organisms/TaskForm',
  component: TaskForm,
} as Meta;

const Template: Story<Props> = (args) => <TaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {},
  isLoading: false,
  projects: [
    {
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      title: 'かるぴす',
      startDate: '2021-01-02',
      id: 'cxKt5Tr6a8jOjCUaTKsP',
      updatedAt: 1609670290378,
      createdAt: 1609578204239,
      dueDate: '2021-12-05',
      detail: '',
      ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    },
    {
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
    {
      dueDate: '2021-01-30',
      detail: '',
      updatedAt: 1609816557245,
      ownerId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      userId: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
      id: 'BrwxFAMxgx2r6NYHjdiZ',
      createdAt: 1609246208352,
      title: 'TASKSHARE',
      startDate: '2020-12-29',
    },
  ],
  users: [
    {
      updatedAt: 1609737325723,
      createdAt: 1609226313258,
      username: 'Shun',
      id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    },
    {
      id: 'lMMJgdULRHag8VUGcPtKPoYHYHU2',
      createdAt: 1609554463673,
      updatedAt: 1609565741027,
      username: 'テストユーザ',
    },
  ],
  closeTaskModal: action('closeTaskModal'),
  createTask: action('createTask'),
  updateTask: action('updateTask'),
};
