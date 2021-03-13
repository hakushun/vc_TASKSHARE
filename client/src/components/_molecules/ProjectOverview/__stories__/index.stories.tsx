import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProjectOverview, Props } from '../ProjectOverview';

export default {
  title: 'molecules/ProjectOverview',
  component: ProjectOverview,
} as Meta;

const Template: Story<Props> = (args) => <ProjectOverview {...args} />;

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
  owner: {
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    updatedAt: 1609737325723,
    username: 'Shun',
    createdAt: 1609226313258,
  },
  createUser: {
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    updatedAt: 1609737325723,
    username: 'Shun',
    createdAt: 1609226313258,
  },
};
