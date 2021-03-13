import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LogoTop } from '..';

export default {
  title: 'atoms/LogoTop',
  component: LogoTop,
} as Meta;

const Template: Story = (args) => <LogoTop {...args} />;

export const Default = Template.bind({});
