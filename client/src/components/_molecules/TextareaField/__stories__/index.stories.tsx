import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from 'react-final-form';
import { TextareaField, Props } from '..';

export default {
  title: 'molecules/TextareaField',
  component: TextareaField,
} as Meta;

const Template: Story<Props> = (args) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Form onSubmit={() => {}} render={() => <TextareaField {...args} />} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  name: 'name',
  id: 'id',
  placeholder: 'placeholder',
  disabled: false,
  required: true,
};
