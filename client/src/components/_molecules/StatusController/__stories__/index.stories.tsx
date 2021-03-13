import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { StatusController, Props } from '../StatusController';

export default {
  title: 'molecules/StatusController',
  component: StatusController,
} as Meta;

const Template: Story<Props> = (args) => <StatusController {...args} />;

export const Default = Template.bind({});
Default.args = {
  filter: {
    started: 'all',
    dueDate: 'all',
    complete: false,
  },
  handleToggleSwitch: action('handleToggleSwitch'),
};
