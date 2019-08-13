import React, { useState } from 'react';
import { string, number, oneOfType } from 'prop-types';
import Details from '@Containers/Details';
import Layout from '../_layout';

const Items = ({
  id,
}) => {
  const [title, setTitle] = useState('Carregando produto no Mercado Livro');

  return (
    <Layout title={title}>
      <Details setTitle={setTitle} id={id} />
    </Layout>
  );
};

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
