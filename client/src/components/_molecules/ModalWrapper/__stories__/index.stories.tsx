import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ModalWrapper, Props } from '../ModalWrapper';

export default {
  title: 'molecules/ModalWrapper',
  component: ModalWrapper,
} as Meta;

const Template: Story<Props> = (args) => <ModalWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'id',
  handleKeydown: action('handleKeydown'),
};
