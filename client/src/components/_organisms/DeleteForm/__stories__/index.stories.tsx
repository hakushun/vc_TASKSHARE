import React, { useRef } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { DeleteForm, Props } from '../DeleteForm';

export default {
  title: 'organisms/DeleteForm',
  component: DeleteForm,
} as Meta;

const Template: Story<Props> = (args) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  return <DeleteForm titleRef={titleRef} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  closeModal: action('closeModal'),
  handleRemove: action('handleRemove'),
};
