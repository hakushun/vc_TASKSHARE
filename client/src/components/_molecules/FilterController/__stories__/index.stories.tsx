import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { FilterController, Props } from '../FilterController';

export default {
  title: 'molecules/FilterController',
  component: FilterController,
} as Meta;

const Template: Story<Props> = (args) => <FilterController {...args} />;

export const Default = Template.bind({});
Default.args = {
  filter: { started: 'all', dueDate: 'all', complete: false },
  handleStartedFilter: action('handleStartedFilter'),
  handleDueDateFilter: action('handleDueDateFilter'),
};
