import React from 'react';
import Example from '.';

describe('Containers - <Example />', () => {
  const createWrapper = () => render(<Example />);

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
