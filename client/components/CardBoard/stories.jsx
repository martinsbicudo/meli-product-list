import React from 'react';
import { storiesOf } from '@storybook/react';
import CardBoard from '.';

storiesOf('CardBoard', module)
  .add('With Children', () => (
    <CardBoard>
      <span>Children CardBoard</span>
    </CardBoard>
  ))
  .add('With Footer', () => (
    <CardBoard footer={<span>Footer CardBoard</span>}>
      <span>Children CardBoard</span>
    </CardBoard>
  ));
