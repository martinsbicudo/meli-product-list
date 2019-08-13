import React, { useState, useEffect } from 'react';
import { string, func } from 'prop-types';
import ProductDetails from '@Containers/ProductDetails';
import Loading from '@Components/Loading';
import EmptyAlert from '@Containers/EmptyAlert';
import Link from 'next/link';
import { useLoadingStatus } from '@Hooks';
import { getProductDetails } from '@Actions';
import style from './style.scss';

const Details = ({
  id,
  setTitle,
}) => {
  const [product, setProduct] = useState(false);

  const [{
    loading,
    status,
  }, {
    setLoading,
    setStatus,
  }] = useLoadingStatus();

  useEffect(() => {
    setLoading(true);

    getProductDetails({
      id,
      resolve({ data }) {
        setStatus({
          success: true,
          error: false,
        });
        setProduct(data);
        setTitle(`${data.title} no Mercado Livre`);
      },
      reject() {
        setStatus({
          success: false,
          error: true,
        });
        setTitle('Produto não encontrado no Mercado Livre');
      },
      finish() {
        setLoading(false);
      },
    });
  }, []);

  const isLoading = (conditional = true) => loading
    || (!status.success && !status.error && conditional);

  return (
    <section className={style.Details}>
      <Loading isLoading={isLoading()}>
        {() => (
          <>
            {!isLoading() && !product && (
              <EmptyAlert
                empty={{
                  title: 'Produto não encontrado',
                  description: (
                    <>
                      {'Volte para a home clicando '}
                      <Link href="/">
                        <a href="javascript();">
                          aqui
                        </a>
                      </Link>
                    </>
                  ),
                }}
              />
            )}
            {!isLoading() && !status.error && product && (
              <ProductDetails product={product} />
            )}
          </>
        )}
      </Loading>
    </section>
  );
};

Details.propTypes = {
  id: string.isRequired,
  setTitle: func.isRequired,
};

export default Details;
