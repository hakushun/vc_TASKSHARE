import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Progress, Props } from '..';

export default {
  title: 'molecules/Progress',
  component: Progress,
} as Meta;

const Template: Story<Props> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [],
  projectId: 'projectId',
};
