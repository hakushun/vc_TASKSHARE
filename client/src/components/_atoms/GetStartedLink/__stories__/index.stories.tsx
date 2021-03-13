import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GetStartedLink } from '..';

export default {
  title: 'atoms/GetStartedLink',
  component: GetStartedLink,
} as Meta;

const Template: Story = (args) => <GetStartedLink {...args} />;

export const Default = Template.bind({});
