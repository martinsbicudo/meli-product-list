import React from 'react';
import Head from 'next/head';
import Example from '@Components/Example';
import ExampleContainer from '@Containers/Example';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Example />
    <ExampleContainer />
  </div>
);

export default Home;
