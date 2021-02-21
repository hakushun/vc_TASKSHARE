import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';

import '../src/components/stylesheets/reset.scss';
import '../src/components/stylesheets/global.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// https://storybook.js.org/addons/storybook-addon-next-router
addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
);
