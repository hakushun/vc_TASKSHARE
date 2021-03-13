import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ActivityAction, Props } from '../ActivityAction';

export default {
  title: 'molecules/ActivityAction',
  component: ActivityAction,
} as Meta;

const Template: Story<Props> = (args) => <ActivityAction {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  handleEdit: action('handleEdit'),
  openConfirmation: action('openConfirmation'),
};
