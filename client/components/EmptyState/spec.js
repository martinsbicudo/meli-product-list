import EmptyState from '.';

describe('Components - <EmptyState />', () => {
  const testMessageImage = 'TEST_IMAGE';
  const testMessageTitle = 'TEST_TITLE';
  const initialState = {
    image: <img alt={testMessageImage} />,
    title: testMessageTitle,
  };
  const createWrapper = (
    props = {},
    children = null,
  ) => render(
    <EmptyState
      {...{
        ...initialState,
        ...props,
      }}
    >
      <span>{children}</span>
    </EmptyState>,
  );

  test('Should finds Image and Title', async () => {
    const { getByText, getByAltText } = createWrapper();

    expect(getByAltText(testMessageImage)).toBeInTheDocument();
    expect(getByText(testMessageTitle)).toBeInTheDocument();
  });

  test('Should finds Children', async () => {
    const testMessageChildren = 'TEST_CHILDREN';
    const { getByText } = createWrapper(null, <span>{testMessageChildren}</span>);

    expect(getByText(testMessageChildren)).toBeInTheDocument();
  });

  test('Should finds Description', async () => {
    const testMessageDescription = 'TEST_CHILDREN';
    const { getByText } = createWrapper({
      description: <span>{testMessageDescription}</span>,
    });

    expect(getByText(testMessageDescription)).toBeInTheDocument();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
