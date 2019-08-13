import React from 'react';
import { object } from 'prop-types';
import CardBoard from '@Components/CardBoard';
import Button from '@Components/Button';
import style from './style.scss';

const ProductDetails = ({
  product,
}) => (
  <div className={style.ProductDetails}>
    <CardBoard
      className={style.ProductDetailsCardBoard}
      footer={(
        <>
          <h2 className={style.ProductDetailsSubTitle}>Descrição do Produto</h2>
          <p className={style.ProductDetailsDescription}>{product.description}</p>
        </>
      )}
    >
      <figure className={style.ProductDetailsFigure}>
        <img
          src={product.pictures[0].url}
          alt={product.title}
          title={product.title}
        />
      </figure>
      <div className={style.ProductDetailsInfos}>
        <h1 className={style.ProductDetailsTitle}>
          {product.title}
        </h1>
        <p className={style.ProductDetailsPrice}>
          <span>$</span>
          {product.price}
          <Button
            className={style.ProductDetailsButton}
            modifiers={['dodger-blue', 'bigger']}
          >
            Comprar
          </Button>
        </p>
      </div>
    </CardBoard>
  </div>
);

ProductDetails.propTypes = {
  product: object.isRequired,
};

export default ProductDetails;
