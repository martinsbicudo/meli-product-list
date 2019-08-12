import Loading from '.';

describe('Components - <Loading />', () => {
  const spyChildren = jest.fn().mockImplementation(() => 'TEST_CHILDREN');
  const createWrapper = (isLoading = true) => render(
    <Loading isLoading={isLoading}>{spyChildren}</Loading>,
  );

  test('Should calls onClick', () => {
    createWrapper(false);

    expect(spyChildren).toHaveBeenCalledTimes(1);
    spyChildren.mockRestore();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
