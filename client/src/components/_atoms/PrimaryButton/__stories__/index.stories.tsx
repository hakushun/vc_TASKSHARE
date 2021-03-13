import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PrimaryButton, Props } from '..';

export default {
  title: 'atoms/PrimaryButton',
  component: PrimaryButton,
} as Meta;

const Template: Story<Props> = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  type: 'button',
  disabled: false,
  arg: 'arg',
  handleClick: action('handleClick'),
};
