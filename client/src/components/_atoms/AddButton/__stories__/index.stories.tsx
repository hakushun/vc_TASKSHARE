import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddButton, Props } from '..';

export default {
  title: 'atoms/AddButton',
  component: AddButton,
} as Meta;

const Template: Story<Props> = (args) => <AddButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  target: 'Project',
  handleAdd: action('handleAdd'),
};
