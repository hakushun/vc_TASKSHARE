import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatusButton, Props } from '../StatusButton';
import { getStringDate } from '../../../../libs/date';

export default {
  title: 'atoms/StatusButton',
  component: StatusButton,
} as Meta;

const Template: Story<Props> = (args) => <StatusButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    projectId: '',
    title: '',
    startDate: getStringDate(new Date().getTime()),
    dueDate: getStringDate(new Date().getTime()),
    description: '',
    status: 'NEW',
    assignTo: '',
  },
  toggleList: action('toggleList'),
};
