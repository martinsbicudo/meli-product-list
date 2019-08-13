jest.mock('@Actions', () => ({
  searchProducts: jest.fn().mockImplematation(({
    resolve,
    reject,
    finish,
  }) => {
    resolve();
    reject();
    finish();
  }),
}));
