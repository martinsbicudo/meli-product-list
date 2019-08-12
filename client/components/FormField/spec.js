import FormField from '.';

describe('Components - <FormField />', () => {
  const testMessagePlaceholder = 'TEST_PLACEHOLDER';
  const spyOnFocus = jest.fn();
  const spyOnBlur = jest.fn();
  const spyOnChange = jest.fn();
  const initialState = {
    onFocus: spyOnFocus,
    onBlur: spyOnBlur,
    onChange: spyOnChange,
    placeholder: testMessagePlaceholder,
  };
  const createWrapper = (
    props = {},
  ) => render(
    <FormField
      {...{
        ...initialState,
        ...props,
      }}
    />,
  );

  test('Should calls onFocus', async () => {
    const { getByPlaceholderText } = createWrapper();

    fireEvent.focus(getByPlaceholderText(testMessagePlaceholder));

    expect(spyOnFocus).toHaveBeenCalledTimes(1);
    spyOnFocus.mockRestore();
  });

  test('Should calls onBlur', async () => {
    const { getByPlaceholderText } = createWrapper({
      onChange: () => {},
    });

    fireEvent.focus(getByPlaceholderText(testMessagePlaceholder));
    fireEvent.blur(getByPlaceholderText(testMessagePlaceholder));

    expect(spyOnBlur).toHaveBeenCalledTimes(1);
    spyOnBlur.mockRestore();
  });

  test('Should calls onChange', async () => {
    const { getByPlaceholderText } = createWrapper();

    fireEvent.change(getByPlaceholderText(testMessagePlaceholder), {
      target: {
        value: 'TEST_VALUE',
      },
    });

    expect(spyOnChange).toHaveBeenCalledTimes(1);
    spyOnChange.mockRestore();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
