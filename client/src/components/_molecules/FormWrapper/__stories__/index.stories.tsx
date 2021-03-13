import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { FormWrapper, Props } from '..';

export default {
  title: 'molecules/FormWrapper',
  component: FormWrapper,
} as Meta;

const Template: Story<Props> = (args) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  return <FormWrapper titleRef={titleRef} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  title: 'title',
  handleStartedFilter: action('handleStartedFilter'),
  onSubmit: action('onSubmit'),
};
