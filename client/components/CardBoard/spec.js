import CardBoard from '.';

describe('Components - <CardBoard />', () => {
  const testMessageChildren = 'TEST_CHILDREN';
  const testMessageFooter = 'TEST_FOOTER';
  const createWrapper = ({
    footer = false,
  } = {}) => render(
    <CardBoard
      {...footer && {
        footer,
      }}
    >
      <span>{testMessageChildren}</span>
    </CardBoard>,
  );

  test('Should finds Children', () => {
    const { getByText } = createWrapper();

    expect(getByText(testMessageChildren)).toBeInTheDocument();
  });

  test('Should finds Footer', () => {
    const { getByText } = createWrapper({
      footer: <span>{testMessageFooter}</span>,
    });

    expect(getByText(testMessageFooter)).toBeInTheDocument();
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
