import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ProjectForm, Props } from '../ProjectForm';

export default {
  title: 'organisms/ProjectForm',
  component: ProjectForm,
} as Meta;

const Template: Story<Props> = (args) => <ProjectForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {},
  isLoading: false,
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
  closeProjectModal: action('closeProjectModal'),
  createProject: action('createProject'),
  updateProject: action('updateProject'),
};
