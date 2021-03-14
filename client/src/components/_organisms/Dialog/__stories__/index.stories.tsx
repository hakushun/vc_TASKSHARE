import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Dialog, Props } from '../Dialog';

export default {
  title: 'organisms/Dialog',
  component: Dialog,
} as Meta;

const Template: Story<Props> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: { title: 'title', description: 'description' },
  closeDialog: action('closeDialog'),
};
