import '@Client/__mocks__/useRouter'; // eslint-disable-line
import Header from '.'; // eslint-disable-line

describe('Containers - <Header />', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((value) => [value, setState]);
  const createWrapper = () => render(
    <Header />,
  );

  test('Should finds button disabled', () => {
    const { container } = createWrapper();

    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  test('Should finds button active', () => {
    const { getByPlaceholderText, container } = createWrapper();

    fireEvent.change(getByPlaceholderText('Buscar produto'), {
      target: {
        value: 'TEST_VALUE',
      },
    });

    expect(container.querySelector('button[type="submit"]')).not.toBeDisabled();
  });

  test('Should finds button disabled after submit', () => {
    const { getByPlaceholderText, container } = createWrapper();
    const form = container.querySelector('form');

    fireEvent.change(getByPlaceholderText('Buscar produto'), {
      target: {
        value: 'TEST_VALUE',
      },
    });
    fireEvent.submit(form);

    expect(container.querySelector('button[type="submit"]')).toBeDisabled();
  });

  test('Simulatw focus', () => {
    const { getByPlaceholderText } = createWrapper();

    fireEvent.focus(getByPlaceholderText('Buscar produto'));
  });

  test('Wrapper Snapshot', () => {
    const { asFragment } = createWrapper();

    expect(asFragment()).toMatchSnapshot();
  });
});
