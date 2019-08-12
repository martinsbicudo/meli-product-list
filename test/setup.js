import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
global.render = render;
global.fireEvent = fireEvent;
