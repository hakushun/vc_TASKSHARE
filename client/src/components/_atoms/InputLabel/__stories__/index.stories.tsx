import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputLabel, Props } from '..';

export default {
  title: 'atoms/InputLabel',
  component: InputLabel,
} as Meta;

const Template: Story<Props> = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  label: 'label',
};
