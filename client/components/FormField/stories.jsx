import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from '.';

storiesOf('FormField', module)
  .add('With onFocus', () => (
    <FormField
      onFocus={() => console.log('onFocus was called') /* eslint-disable-line */}
    />
  ))
  .add('With onBlur', () => (
    <FormField
      onBlur={() => console.log('onBlur was called') /* eslint-disable-line */}
    />
  ))
  .add('With onChange', () => (
    <FormField
      onChange={() => console.log('onChange was called') /* eslint-disable-line */}
    />
  ))
  .add('With Placeholder', () => (
    <FormField placeholder="Placeholder FormField" />
  ));
