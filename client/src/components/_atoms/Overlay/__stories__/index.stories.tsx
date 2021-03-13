import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Overlay } from '..';

export default {
  title: 'atoms/Overlay',
  component: Overlay,
} as Meta;

const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
document.querySelector('body')!.appendChild(overlay);

const Template: Story = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
