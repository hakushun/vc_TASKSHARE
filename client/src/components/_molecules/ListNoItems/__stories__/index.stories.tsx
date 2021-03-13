import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ListNoItems } from '..';

export default {
  title: 'molecules/ListNoItems',
  component: ListNoItems,
} as Meta;

const Template: Story = (args) => <ListNoItems {...args} />;

export const Default = Template.bind({});
