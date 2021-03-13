import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Loading } from '..';

export default {
  title: 'atoms/Loading',
  component: Loading,
} as Meta;

const Template: Story = (args) => <Loading {...args} />;

export const Default = Template.bind({});
