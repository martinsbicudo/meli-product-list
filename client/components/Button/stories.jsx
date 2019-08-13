import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('With text', () => (
    <Button>
      With text
    </Button>
  ))
  .add('With Node/Component', () => (
    <Button>
      <strong>
        With Node/Component
      </strong>
    </Button>
  ))
  .add('With [bigger] modifier', () => (
    <Button modifiers={['bigger']}>
      With bigger modifier
    </Button>
  ))
  .add('With [dodger-blue] modifier', () => (
    <Button modifiers={['dodger-blue']}>
      With dodger-blue modifier
    </Button>
  ))
  .add('With both modifiers', () => (
    <Button modifiers={['bigger', 'dodger-blue']}>
      With both modifier
    </Button>
  ))
  .add('With [onClick] modifiers', () => (
    <Button onClick={() => console.log('onClick was called') /* eslint-disable-line */}>
      With onClick modifier
    </Button>
  ));
