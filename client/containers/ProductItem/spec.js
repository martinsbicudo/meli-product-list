import ProductItem from '.';

describe('Containers - <ProductItem />', () => {
  const testMessageTitle = 'TEST_TITLE';
  const testMessagePrice = '300';
  const testMessageImage = 'TEST_IMAGE';
  const createWrapper = () => render(
    <ProductItem
      product={{
        title: testMessageTitle,
        price: testMessagePrice,
        thumbnail: testMessageImage,
      }}
    />,
  );

  test('Should finds Title', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessageTitle)).toBeInTheDocument();
  });

  test('Should finds Image', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessagePrice)).toBeInTheDocument();
  });

  test('Should finds Description', () => {
    const { getByAltText } = createWrapper();

    expect(getByAltText(testMessageTitle).src).toBe(`http://localhost/${testMessageImage}`);
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
