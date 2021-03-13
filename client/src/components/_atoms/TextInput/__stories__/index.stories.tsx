import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from 'react-final-form';
import { TextInput, Props } from '..';

export default {
  title: 'atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form onSubmit={() => {}} render={() => <TextInput {...args} />} />
);

export const Default = Template.bind({});
Default.args = {
  type: '',
  name: 'name',
  id: 'id',
  placeholder: 'placeholder',
  disabled: false,
  required: true,
};
