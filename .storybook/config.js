import { configure, addDecorator } from '@storybook/react';
import decorators from './decorators';

// CONFIGURE
const req = require.context('../client/components', true, /stories.jsx$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module);

// DECORATIONS
decorators(addDecorator);
