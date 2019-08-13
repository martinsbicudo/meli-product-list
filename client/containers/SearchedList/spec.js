import SearchedList from '.';
import { useLoadingStatus } from '@Hooks';
import { searchProducts } from '@Actions';

// MOCK USE-LOADING-STATUS
const initialState = [{
  loading: false,
  status: {
    success: false,
    error: false,
  },
}, {
  setLoading: jest.fn(),
  setStatus: jest.fn(),
}];
jest.mock('../../hooks', () => ({
  useLoadingStatus: jest.fn(),
}));
// /

// MOCK USE-LOADING-STATUS
const testMessageTitle = 'TEST_TITLE';
const testMessagePrice = '300';
const testMessageImage = 'TEST_IMAGE';
const product = () => ({
  id: Math.random(),
  title: testMessageTitle,
  price: testMessagePrice,
  thumbnail: testMessageImage,
});
const initialProducts = ({
  resolve,
  reject,
  finish,
}) => {
  resolve({
    data: [
      product(),
      product(),
      product(),
      product(),
      product(),
    ],
  });
  reject();
  finish();
};
jest.mock('../../actions', () => ({
  searchProducts: jest.fn(),
}));
// /

describe('Containers - <SearchedList />', () => {
  const search = 'TEST_SEARCH';
  const createWrapper = () => render(
    <SearchedList search={search} />,
  );

  test('Should finds 5 LoadingBar', () => {
    useLoadingStatus.mockImplementation(() => initialState);
    const { container } = createWrapper();

    expect(container.querySelectorAll('.LoadingBar')).toHaveLength(5);
  });

  test('Should finds EmptyAlert', () => {
    useLoadingStatus.mockImplementation(() => ([{
      ...initialState[0],
      status: {
        success: true,
        error: false,
      },
    }, { ...initialState[1] }]));
    const { getByText } = createWrapper();

    expect(getByText('Tente pesquisar um produto diferente :)')).toBeInTheDocument();
  });

  test('Should finds 5 items', () => {
    useLoadingStatus.mockImplementation(() => ([{
      ...initialState[0],
      status: {
        success: true,
        error: false,
      },
    }, { ...initialState[1] }]));
    searchProducts.mockImplementation(initialProducts);
    const { container } = createWrapper();

    expect(container.querySelectorAll('[alt="TEST_TITLE"]')).toHaveLength(5);
  });

  test('Wrapper Snapshot', () => {
    useLoadingStatus.mockImplementation(() => initialState);
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
