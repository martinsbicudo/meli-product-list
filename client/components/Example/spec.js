import React from 'react';
import Example from '.';

describe('Meli - Components - <Example />', () => {
  const createWrapper = () => mount(<Example />);

  it('Wrapper Snapshot', () => {
    const Wrapper = createWrapper();
    expect(Wrapper).toMatchSnapshot();
  });
});
