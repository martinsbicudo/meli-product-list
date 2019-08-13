import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import ProductItem from '@Containers/ProductItem';
import Loading from '@Components/Loading';
import EmptyAlert from '@Containers/EmptyAlert';
import Link from 'next/link';
import { useLoadingStatus } from '@Hooks';
import { searchProducts } from '@Actions';
import style from './style.scss';

const SearchedList = ({
  search,
}) => {
  const [products, setProducts] = useState([]);

  const [{
    loading,
    status,
  }, {
    setLoading,
    setStatus,
  }] = useLoadingStatus();

  useEffect(() => {
    setLoading(true);

    searchProducts({
      search,
      resolve({ data }) {
        setStatus({
          success: true,
          error: false,
        });
        setProducts(data);
      },
      reject() {
        setStatus({
          success: false,
          error: true,
        });
      },
      finish() {
        setLoading(false);
      },
    });
  }, [search]);

  const isLoading = (conditional = true) => loading
    || (!status.success && !status.error && conditional);

  return (
    <section className={style.SearchedList}>
      <Loading isLoading={isLoading()}>
        {() => (
          <>
            {!isLoading() && !products.length && (
              <EmptyAlert
                empty={{
                  title: (
                    <>
                      Nenhum resultado encontrado para
                      <br />
                      <strong>
                        <u className={style.SearchedListQuery}>{search}</u>
                      </strong>
                    </>
                  ),
                  description: 'Tente pesquisar um produto diferente :)',
                  button: 'Tentar novamente',
                }}
              />
            )}
            {!isLoading() && Boolean(products.length) && (
              <>
                <h1 className={style.SearchedListTitle}>
                  {'Resultados da pesquisa '}
                  <strong>
                    <u>{search}</u>
                  </strong>
                </h1>
                <ul className={style.SearchedListBox}>
                  {products.map((product) => (
                    <Link
                      href={`/items/${product.id}`}
                      key={product.id}
                    >
                      <div className={style.SearchedListItem}>
                        <ProductItem product={product} />
                      </div>
                    </Link>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </Loading>
    </section>
  );
};

SearchedList.propTypes = {
  search: string.isRequired,
};

export default SearchedList;
