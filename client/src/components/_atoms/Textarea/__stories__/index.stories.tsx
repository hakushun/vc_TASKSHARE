import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from 'react-final-form';
import { Textarea, Props } from '..';

export default {
  title: 'atoms/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<Props> = (args) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form onSubmit={() => {}} render={() => <Textarea {...args} />} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  id: 'id',
  placeholder: 'placeholder',
  disabled: false,
  required: true,
};
