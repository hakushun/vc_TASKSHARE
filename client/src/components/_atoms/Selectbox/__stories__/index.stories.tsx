import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from 'react-final-form';
import { Selectbox, Props } from '..';

export default {
  title: 'atoms/Selectbox',
  component: Selectbox,
} as Meta;

const Template: Story<Props> = (args) => (
  <Form
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}
    render={() => (
      <Selectbox {...args}>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
      </Selectbox>
    )}
  />
);

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  id: 'id',
};
