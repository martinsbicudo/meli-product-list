import React from 'react';
import { string } from 'prop-types';
import SearchedList from '@Containers/SearchedList';
import Layout from '../_layout';

const Search = ({
  search,
}) => (
  search
    && (
      <Layout title={`${search} no Mercado Livro`} search={search}>
        <SearchedList search={search} />
      </Layout>
    )
);

Search.getInitialProps = async ({ query, res }) => {
  if (!query.search) res.redirect('/');

  return query.search
    ? {
      search: query.search,
    }
    : {};
};

Search.propTypes = {
  search: string,
};

Search.defaultProps = {
  search: '',
};

export default Search;
