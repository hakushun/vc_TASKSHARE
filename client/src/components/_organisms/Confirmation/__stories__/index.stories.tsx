import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Confirmation, Props } from '../Confirmation';

export default {
  title: 'organisms/Confirmation',
  component: Confirmation,
} as Meta;

const Template: Story<Props> = (args) => <Confirmation {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  id: 'id',
  handleRemove: action('handleRemove'),
  handleClose: action('handleClose'),
};
