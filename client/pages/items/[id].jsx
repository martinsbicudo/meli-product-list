import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import Layout from '../_layout';

const Items = ({
  id,
}) => (
  <Layout title="TEST_TITLE">
    Detalhes
    {id}
  </Layout>
);

Items.getInitialProps = async ({ query, res }) => {
  if (!query.id) res.redirect('/');

  return query.id
    ? {
      id: query.id,
    }
    : {};
};

Items.propTypes = {
  id: oneOfType([string, number]).isRequired,
};

export default Items;
