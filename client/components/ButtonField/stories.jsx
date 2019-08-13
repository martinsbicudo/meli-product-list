import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonField from '.';
import { placeholder } from '@babel/types';

storiesOf('ButtonField', module)
  .add('With Children', () => (
    <ButtonField>
      Text
    </ButtonField>
  ))
  .add('With FormField [config]', () => (
    <ButtonField
      formField={{
        onFocus: () => console.log('onFocus was called') /* eslint-disable-line */,
        placeholder: 'Placeholder ButtonField',
      }}
    >
      Text
    </ButtonField>
  ))
  .add('With Button [config]', () => (
    <ButtonField
      button={{
        onClick: () => console.log('onClick was called') /* eslint-disable-line */,
      }}
    >
      Text
    </ButtonField>
  ));
