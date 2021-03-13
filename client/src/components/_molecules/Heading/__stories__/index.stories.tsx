import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, Props } from '..';

export default {
  title: 'molecules/Heading',
  component: Heading,
} as Meta;

const Template: Story<Props> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
};
