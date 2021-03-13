import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SecondaryButton, Props } from '..';

export default {
  title: 'atoms/SecondaryButton',
  component: SecondaryButton,
} as Meta;

const Template: Story<Props> = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  type: 'button',
  disabled: false,
  handleClick: action('handleClick'),
};
