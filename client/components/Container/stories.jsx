import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '.';

storiesOf('Container', module)
  .add('With Children', () => (
    <Container>
      <span>Children Container</span>
    </Container>
  ));
