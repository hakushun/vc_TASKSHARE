import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Profile, Props } from '../Profile';

export default {
  title: 'organisms/Profile',
  component: Profile,
} as Meta;

const Template: Story<Props> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {},
  isLoading: false,
  handleUpdate: action('handleUpdate'),
  openModal: action('openModal'),
};
