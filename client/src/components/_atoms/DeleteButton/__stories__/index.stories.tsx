import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DeleteButton, Props } from '..';

export default {
  title: 'atoms/DeleteButton',
  component: DeleteButton,
} as Meta;

const Template: Story<Props> = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  target: 'target',
  handleOpen: action('handleOpen'),
};
