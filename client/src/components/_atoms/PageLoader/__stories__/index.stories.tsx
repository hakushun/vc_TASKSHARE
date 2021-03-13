import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageLoader } from '..';

export default {
  title: 'atoms/PageLoader',
  component: PageLoader,
} as Meta;

const Template: Story = (args) => <PageLoader {...args} />;

export const Default = Template.bind({});
