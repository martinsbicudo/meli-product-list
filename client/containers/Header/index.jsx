import React from 'react';
import { string } from 'prop-types';
import Container from '@Components/Container';

const Header = ({
  search,
}) => (
  <header>
    <Container>
      {search}
    </Container>
  </header>
);

Header.propTypes = {
  search: string,
};

Header.defaultProps = {
  search: '',
};

export default Header;
