import EmptyAlert from '.';

describe('Containers - <EmptyAlert />', () => {
  const testMessageTitle = 'TEST_TITLE';
  const testMessageDescription = 'TEST_DESCRIPTION';
  const createWrapper = (props = {}) => render(
    <EmptyAlert
      empty={props}
    />,
  );

  test('Should finds Title', () => {
    const { getByText } = createWrapper({
      title: testMessageTitle,
    });

    expect(getByText(testMessageTitle)).toBeInTheDocument();
  });

  test('Should finds Description', () => {
    const { getByText } = createWrapper({
      description: testMessageDescription,
    });

    expect(getByText(testMessageDescription)).toBeInTheDocument();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
