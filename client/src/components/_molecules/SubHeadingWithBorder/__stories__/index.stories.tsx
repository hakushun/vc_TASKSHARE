import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SubHeadingWithBorder, Props } from '..';

export default {
  title: 'molecules/SubHeadingWithBorder',
  component: SubHeadingWithBorder,
} as Meta;

const Template: Story<Props> = (args) => <SubHeadingWithBorder {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
};
