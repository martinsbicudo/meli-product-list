import Container from '.';

describe('Components - <Container />', () => {
  const testMessage = 'TEST_CHILDREN';
  const createWrapper = () => render(
    <Container>
      <span>{testMessage}</span>
    </Container>,
  );

  test('Should finds Children', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessage)).toBeInTheDocument();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
