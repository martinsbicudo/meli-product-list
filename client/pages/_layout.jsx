import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import Head from 'next/head';
import Container from '@Components/Container';
import Header from '@Containers/Header';
import Footer from '@Containers/Footer';

const Layout = ({
  title,
  search,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <main>
      <Header search={search} />
      <Container>
        {children}
      </Container>
      <Footer />
    </main>
  </>
);

Layout.propTypes = {
  title: string.isRequired,
  children: oneOfType([string, node]).isRequired,
  search: string,
};

Layout.defaultProps = {
  search: '',
};

export default Layout;
