import { searchProducts } from '.';

const mock = createAxiosMock();
const search = 'TEST_SEARCH';

describe('Actions', () => {
  describe('Success', () => {
    beforeEach(() => {
      mock.onGet(`/api/search/${search}`).reply(
        200,
        {
          products: 'TEST_PRODUCTS',
        },
      );
    });

    test('Should calls Resolve and Finish', async () => {
      const spyResolve = jest.fn();
      const spyFinish = jest.fn();

      await searchProducts({
        search,
        resolve: spyResolve,
        finish: spyFinish,
      });

      expect(spyResolve).toHaveBeenCalledTimes(1);
      expect(spyFinish).toHaveBeenCalledTimes(1);
      spyResolve.mockReset();
      spyFinish.mockReset();
    });
  });

  describe('Error', () => {
    beforeEach(() => {
      mock.onGet(`/api/search/${search}`).reply(
        404,
        {
          error: 'TEST_ERROR',
        },
      );
    });

    test('Should calls Reject and Finish', async () => {
      const spyReject = jest.fn();
      const spyFinish = jest.fn();

      await searchProducts({
        search,
        reject: spyReject,
        finish: spyFinish,
      });

      expect(spyReject).toHaveBeenCalledTimes(1);
      expect(spyFinish).toHaveBeenCalledTimes(1);
      spyReject.mockReset();
      spyFinish.mockReset();
    });

    test('Should calls Reject | Without Finish method', async () => {
      const spyReject = jest.fn();

      await searchProducts({
        search,
        reject: spyReject,
      });

      expect(spyReject).toHaveBeenCalledTimes(1);
      spyReject.mockReset();
    });
  });
});
