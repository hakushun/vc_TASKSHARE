import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { BargerMenu, Props } from '../BargerMenu';

export default {
  title: 'organisms/BargerMenu',
  component: BargerMenu,
} as Meta;

const Template: Story<Props> = (args) => <BargerMenu {...args} />;

export const isLoggedOut = Template.bind({});
isLoggedOut.args = {
  isAuth: false,
  logout: action('logout'),
  handletoggle: action('handletoggle'),
};

export const isLoggedIn = Template.bind({});
isLoggedIn.args = {
  isAuth: true,
  logout: action('logout'),
  handletoggle: action('handletoggle'),
};
