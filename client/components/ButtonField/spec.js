import ButtonField from '.';

describe('Components - <ButtonField />', () => {
  const testMessagePlaceholder = 'TEST_PLACEHOLDER';
  const testMessageChildren = 'TEST_CHILDREN';
  const spyOnClick = jest.fn();
  const initialState = {
    button: {
      onClick: spyOnClick,
      placeholder: testMessagePlaceholder,
    },
  };
  const createWrapper = (
    props = {},
    children = null,
  ) => render(
    <ButtonField
      {...{
        ...initialState,
        ...props,
      }}
    >
      {children}
    </ButtonField>,
  );

  test('Should calls onClick', () => {
    const { getByPlaceholderText } = createWrapper();

    fireEvent.click(getByPlaceholderText(testMessagePlaceholder));

    expect(spyOnClick).toHaveBeenCalledTimes(1);
    spyOnClick.mockRestore();
  });

  test('Should finds Children', () => {
    const { getByText } = createWrapper(null, <span>{testMessageChildren}</span>);

    expect(getByText(testMessageChildren)).toBeInTheDocument();
    spyOnClick.mockRestore();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
