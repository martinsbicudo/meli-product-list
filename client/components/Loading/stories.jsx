import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '.';

storiesOf('Loading', module)
  .add('With [isLoading=true]', () => (
    <Loading isLoading>
      {() => {}}
    </Loading>
  ))
  .add('With [isLoading=false]', () => (
    <Loading isLoading={false}>
      {() => <span>{'Doesn\'t Loading'}</span>}
    </Loading>
  ));
