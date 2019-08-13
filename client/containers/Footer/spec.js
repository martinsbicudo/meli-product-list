import Footer from '.';

describe('Containers - <Footer />', () => {
  const createWrapper = () => render(
    <Footer />,
  );

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
