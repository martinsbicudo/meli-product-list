import React from 'react';
import { storiesOf } from '@storybook/react';
import EmptyState from '.';

storiesOf('EmptyState', module)
  .add('With Required [props]', () => (
    <EmptyState
      title="Title EmptyState"
      image={<img alt="Image EmptyState" /> /* eslint-disable-line */}
    />
  ))
  .add('With Children', () => (
    <EmptyState
      title="Title EmptyState"
      image={<img alt="Image EmptyState" /> /* eslint-disable-line */}
    >
      <p align="center">Children EmptyState</p>
    </EmptyState>
  ))
  .add('With Description', () => (
    <EmptyState
      title="Title EmptyState"
      description="Description EmptyState"
      image={<img alt="Description EmptyState" /> /* eslint-disable-line */}
    />
  ));
