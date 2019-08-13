import React, { useState } from 'react';
import { string } from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ButtonField from '@Components/ButtonField';
import Container from '@Components/Container';
import classnames from 'classnames';
import logoDesktopImage from '@Client/static/images/logo-desktop.png';
import logoDesktopImage2x from '@Client/static/images/logo-desktop@2x.png';
import logoMobileImage from '@Client/static/images/logo-mobile.png';
import logoMobileImage2x from '@Client/static/images/logo-mobile@2x.png';
import searchImage from '@Client/static/images/search.png';
import searchImage2x from '@Client/static/images/search@2x.png';
import style from './style.scss';

const Header = ({
  search: initialSearch,
}) => {
  const router = useRouter();

  const [isFocus, setIsFocus] = useState(false);

  const [search, setSearch] = useState({
    previous: initialSearch,
    current: initialSearch,
  });

  function toggleFocus() {
    setIsFocus((currentIsFocus) => !currentIsFocus);
  }

  function handleSubmit(e) {
    /* istanbul ignore next */
    if (e.preventDefault) e.preventDefault();

    /* istanbul ignore next */
    if (search.previous !== search.current) {
      setSearch((previousState) => ({
        ...previousState,
        previous: search.current,
      }));

      router.push({
        pathname: '/items',
        query: {
          search: search.current,
        },
      });
    }
  }

  function handleChange({ target }) {
    setSearch((previousState) => ({
      ...previousState,
      current: target.value,
    }));
  }

  const disabledButton = () => !search.current || (search.previous === search.current);

  return (
    <header className={style.Header}>
      <Container className={style.HeaderContainer}>
        <Link href="/">
          <img
            className={style.HeaderLogoDesktop}
            src={logoDesktopImage}
            srcSet={`${logoDesktopImage2x} 2x`}
            alt="Mercado Livre"
            title="Mercado Livre"
          />
        </Link>
        <Link href="/">
          <img
            className={style.HeaderLogoMobile}
            src={logoMobileImage}
            srcSet={`${logoMobileImage2x} 2x`}
            alt="Mercado Livre"
            title="Mercado Livre"
          />
        </Link>
        <form
          className={style.HeaderForm}
          onSubmit={handleSubmit}
          method="get"
        >
          <ButtonField
            className={classnames(
              style.HeaderSearch,
              { [style.HeaderSearchFocus]: isFocus },
            )}
            formField={{
              value: search.current,
              placeholder: 'Buscar produto',
              name: 'search',
              onFocus: toggleFocus,
              onBlur: toggleFocus,
              onChange: handleChange,
            }}
            button={{
              type: 'submit',
              ...disabledButton() && {
                disabled: 'disabled',
              },
            }}
          >
            <img
              className={style.HeaderSearchImage}
              src={searchImage}
              srcSet={`${searchImage2x} 2x`}
              alt="Buscar"
              title="Buscar"
            />
            <span className={style.HeaderSearchSpan}>Buscar</span>
          </ButtonField>
        </form>
      </Container>
    </header>
  );
};

Header.propTypes = {
  search: string,
};

Header.defaultProps = {
  search: '',
};

export default Header;
