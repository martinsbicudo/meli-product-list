import Details from '.';
import { useLoadingStatus } from '@Hooks';
import { getProductDetails } from '@Actions';

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
const testMessageDescription = 'TEST_DESCRIPTION';
const initialProducts = ({
  resolve,
  reject,
  finish,
}) => {
  resolve({
    data: {
      id: Math.random(),
      title: testMessageTitle,
      price: testMessagePrice,
      pictures: [{
        url: testMessageImage,
      }],
      description: testMessageDescription,
    },
  });
  reject();
  finish();
};
jest.mock('../../actions', () => ({
  getProductDetails: jest.fn(),
}));
// /

describe('Containers - <Details />', () => {
  const id = 'TEST_ID';
  const createWrapper = () => render(
    <Details search={id} setTitle={jest.fn()} />,
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

    expect(getByText('Produto não encontrado')).toBeInTheDocument();
  });

  test('Should finds Product Description', () => {
    useLoadingStatus.mockImplementation(() => ([{
      ...initialState[0],
      status: {
        success: true,
        error: false,
      },
    }, { ...initialState[1] }]));
    getProductDetails.mockImplementation(initialProducts);
    const { getByText } = createWrapper();

    expect(getByText(testMessageDescription)).toBeInTheDocument();
  });

  test('Wrapper Snapshot', () => {
    useLoadingStatus.mockImplementation(() => initialState);
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
