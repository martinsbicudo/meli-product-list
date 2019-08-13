import { searchProducts, getProductDetails } from '.';

const mock = createAxiosMock();
const search = 'TEST_SEARCH';
const id = 'TEST_ID';

describe('Actions', () => {
  describe('Success', () => {
    beforeEach(() => {
      mock.onGet(`/api/search/${search}`).reply(
        200,
        {
          products: 'TEST_PRODUCTS',
        },
      );
      mock.onGet(`/api/items/${id}`).reply(
        200,
        {
          products: 'TEST_PRODUCTS',
        },
      );
    });

    test('[Search Products] - Should calls Resolve and Finish', async () => {
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

    test('[Get Product Details] - Should calls Resolve and Finish', async () => {
      const spyResolve = jest.fn();
      const spyFinish = jest.fn();

      await getProductDetails({
        id,
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
      mock.onGet(`/api/items/${id}`).reply(
        404,
        {
          error: 'TEST_ERROR',
        },
      );
    });

    test('[Search Products] - Should calls Reject and Finish', async () => {
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

    test('[Search Products] - Should calls Reject | Without Finish method', async () => {
      const spyReject = jest.fn();

      await searchProducts({
        search,
        reject: spyReject,
      });

      expect(spyReject).toHaveBeenCalledTimes(1);
      spyReject.mockReset();
    });

    test('[Get Product Details] - Should calls Reject and Finish', async () => {
      const spyReject = jest.fn();
      const spyFinish = jest.fn();

      await getProductDetails({
        id,
        reject: spyReject,
        finish: spyFinish,
      });

      expect(spyReject).toHaveBeenCalledTimes(1);
      expect(spyFinish).toHaveBeenCalledTimes(1);
      spyReject.mockReset();
      spyFinish.mockReset();
    });

    test('[Get Product Details] - Should calls Reject | Without Finish method', async () => {
      const spyReject = jest.fn();

      await getProductDetails({
        id,
        reject: spyReject,
      });

      expect(spyReject).toHaveBeenCalledTimes(1);
      spyReject.mockReset();
    });
  });
});
