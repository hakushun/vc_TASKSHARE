import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ActivityForm, Props } from '../ActivityForm';

export default {
  title: 'organisms/ActivityForm',
  component: ActivityForm,
} as Meta;

const Template: Story<Props> = (args) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  return <ActivityForm titleRef={titleRef} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  initialValues: { comment: '' },
  isLoading: false,
  closeActivityModal: action('closeActivityModal'),
  createActivity: action('createActivity'),
  updateActivity: action('updateActivity'),
};
