import React from 'react';
import {
  configure,
  shallow,
  render,
  mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// DOM
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM(`
  <!doctype html>
  <html>
    <body>
    </body>
  </html>
`);
const { window } = jsdom;
global.window = window;
global.document = window.document;

// GLOBALS
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({
  adapter: new Adapter(),
});
