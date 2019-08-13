import SearchedList from '.';

describe('Containers - <SearchedList />', () => {
  const createWrapper = () => render(
    <SearchedList
      search="TEST_SEARCH"
    />,
  );

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
