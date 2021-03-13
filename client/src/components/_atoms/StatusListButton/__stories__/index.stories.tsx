import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatusListButton, Props } from '../StatusListButton';

export default {
  title: 'atoms/StatusListButton',
  component: StatusListButton,
} as Meta;

const Template: Story<Props> = (args) => <StatusListButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'New',
  status: 'NEW',
  updateTaskStatus: action('updateTaskStatus'),
};
