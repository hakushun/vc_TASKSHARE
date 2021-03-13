import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EditButton, Props } from '..';

export default {
  title: 'atoms/EditButton',
  component: EditButton,
} as Meta;

const Template: Story<Props> = (args) => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  target: 'target',
  id: 'id',
  width: '20',
  height: '20',
  handleEdit: action('handleEdit'),
};
