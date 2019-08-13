import Header from '.';

describe('Containers - <Header />', () => {
  const createWrapper = () => render(
    <Header />,
  );

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
