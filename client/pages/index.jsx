import React from 'react';
import Head from 'next/head';
import ExampleContainer from '@Containers/Example';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <ExampleContainer />
  </div>
);

export default Home;
