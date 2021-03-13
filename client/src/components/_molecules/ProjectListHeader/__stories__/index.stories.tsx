import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ProjectListHeader, Props } from '../ProjectListHeader';

export default {
  title: 'molecules/ProjectListHeader',
  component: ProjectListHeader,
} as Meta;

const Template: Story<Props> = (args) => <ProjectListHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  context: 'open',
  projectsSort: {
    projects: { key: 'progress', order: 'up' },
    tasks: { key: 'dueDate', order: 'up' },
  },
  handleSrotProjects: action('handleSrotProjects'),
};
