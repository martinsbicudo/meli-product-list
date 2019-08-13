import ProductDetails from '.';

describe('Containers - <ProductDetails />', () => {
  const testMessageTitle = 'TEST_TITLE';
  const testMessagePrice = '300';
  const testMessageImage = 'TEST_IMAGE';
  const testMessageDescription = 'TEST_DESCRIPTION';
  const createWrapper = () => render(
    <ProductDetails
      product={{
        title: testMessageTitle,
        price: testMessagePrice,
        pictures: [{
          url: testMessageImage,
        }],
        description: testMessageDescription,
      }}
    />,
  );

  test('Should finds Title', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessageTitle)).toBeInTheDocument();
  });

  test('Should finds Price', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessagePrice)).toBeInTheDocument();
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
