import axios from 'axios';

export const searchProducts = async ({
  search,
  resolve,
  reject,
  finish = () => {},
}) => {
  try {
    const response = await axios(`/api/search/${search}`);
    resolve(response);
  } catch (e) {
    reject(e);
  } finally {
    finish();
  }
};

export const getProductDetails = async ({
  id,
  resolve,
  reject,
  finish = () => {},
}) => {
  try {
    const response = await axios(`/api/items/${id}`);
    resolve(response);
  } catch (e) {
    reject(e);
  } finally {
    finish();
  }
};

export default searchProducts;
