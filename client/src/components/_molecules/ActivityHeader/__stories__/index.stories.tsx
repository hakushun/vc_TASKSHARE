import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ActivityHeader, Props } from '../ActivityHeader';

export default {
  title: 'molecules/ActivityHeader',
  component: ActivityHeader,
} as Meta;

const Template: Story<Props> = (args) => <ActivityHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  userId: 'userId',
  updatedAt: new Date(),
  id: 'id',
  user: {
    isAuth: true,
    id: 'iXSY59OyTUgnrcklK6AIuqj0VGz2',
    email: 'hakushun.pianist@gmail.com',
    username: 'Shun',
  },
};
