jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
