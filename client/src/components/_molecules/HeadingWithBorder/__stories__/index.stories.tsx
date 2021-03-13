import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeadingWithBorder, Props } from '..';

export default {
  title: 'molecules/HeadingWithBorder',
  component: HeadingWithBorder,
} as Meta;

const Template: Story<Props> = (args) => <HeadingWithBorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
};
