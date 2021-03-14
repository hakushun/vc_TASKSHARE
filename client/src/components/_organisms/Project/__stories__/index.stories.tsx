import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Project, Props } from '../Project';

export default {
  title: 'organisms/Project',
  component: Project,
} as Meta;

const Template: Story<Props> = (args) => <Project {...args} />;

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
  tasks: [],
  relatedTasks: [],
  relatedActivities: [],
  user: {
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    updatedAt: 1609737325723,
    username: 'Shun',
    createdAt: 1609226313258,
  },
  isLoading: false,
  handleEditProject: action('handleEditProject'),
  handleAddTask: action('handleAddTask'),
  handleAddActivity: action('handleAddActivity'),
  handleRemoveProject: action('handleRemoveProject'),
  openConfirmation: action('openConfirmation'),
};
