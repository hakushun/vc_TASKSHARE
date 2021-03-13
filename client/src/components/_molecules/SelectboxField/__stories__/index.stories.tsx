import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from 'react-final-form';
import { SelectboxField, Props } from '..';

export default {
  title: 'molecules/SelectboxField',
  component: SelectboxField,
} as Meta;

const Template: Story<Props> = (args) => (
  <Form
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}
    render={() => (
      <SelectboxField {...args}>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
      </SelectboxField>
    )}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  name: 'name',
  id: 'id',
  required: true,
};
