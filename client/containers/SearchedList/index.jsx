import React from 'react';
import { string } from 'prop-types';

const SearchedList = ({
  search,
}) => (
  <span>{search}</span>
);

SearchedList.propTypes = {
  search: string.isRequired,
};

export default SearchedList;
