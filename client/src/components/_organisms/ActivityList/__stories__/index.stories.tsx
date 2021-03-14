import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { ActivityList, Props } from '../ActivityList';

export default {
  title: 'organisms/ActivityList',
  component: ActivityList,
} as Meta;

const Template: Story<Props> = (args) => <ActivityList {...args} />;

export const NoItems = Template.bind({});
NoItems.args = {
  activities: [],
  isLoading: false,
  handleRemove: action('handleRemove'),
};

export const ListItems = Template.bind({});
ListItems.args = {
  ...NoItems.args,
  activities: [
    { comment: 'test1', updatedAt: new Date() },
    { comment: 'test2', updatedAt: new Date() },
    { comment: 'test3', updatedAt: new Date() },
  ],
};
