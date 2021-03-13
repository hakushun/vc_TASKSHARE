import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuButton, Props } from '../MenuButton';

export default {
  title: 'atoms/MenuButton',
  component: MenuButton,
} as Meta;

const Template: Story<Props> = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  handletoggle: action('handletoggle'),
};
