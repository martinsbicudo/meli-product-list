import Button from '.';

describe('Components - <Button />', () => {
  const testMessage = 'TEST_MESSAGE';
  const createWrapper = (
    message = testMessage,
    props = {},
  ) => render(
    <Button {...props}>{message}</Button>,
  );

  test('Should has test message', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessage)).toBeInTheDocument();
  });

  test('Should calls onClick', () => {
    const spyOnClick = jest.fn();
    const { getByText } = createWrapper(undefined, { onClick: spyOnClick });

    fireEvent.click(getByText(testMessage));

    expect(spyOnClick).toHaveBeenCalledTimes(1);
    spyOnClick.mockRestore();
  });

  test('Should set type Button', () => {
    const { getByText } = createWrapper(undefined, { type: 'submit' });

    expect(getByText(testMessage).type).toBe('submit');
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
