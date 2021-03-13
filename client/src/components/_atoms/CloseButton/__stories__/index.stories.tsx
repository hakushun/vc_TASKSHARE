import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CloseButton, Props } from '..';

export default {
  title: 'atoms/CloseButton',
  component: CloseButton,
} as Meta;

const Template: Story<Props> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClose: action('handleClose'),
};
