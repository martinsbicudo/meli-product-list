import React from 'react';
import EmptyAlert from '@Containers/EmptyAlert';
import Layout from './_layout';

const Home = () => (
  <Layout title="Busca de produtos no Mercado Livre">
    <EmptyAlert
      empty={{
        title: 'Lista vazia',
        description: 'Efetue uma pesquisa para mostrar a lista de produtos :)',
      }}
    />
  </Layout>
);

export default Home;
