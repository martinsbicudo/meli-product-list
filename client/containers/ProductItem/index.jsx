import React from 'react';
import { object } from 'prop-types';
import CardBoard from '@Components/CardBoard';
import style from './style.scss';

const ProductItem = ({
  product,
}) => (
  <CardBoard className={style.ProductItem}>
    <figure className={style.ProductItemFigure}>
      <img
        src={product.thumbnail}
        alt={product.title}
        title={product.title}
      />
    </figure>
    <div>
      <p className={style.ProductItemPrice}>
        <span>$</span>
        {product.price}
      </p>
      <h2 className={style.ProductItemTitle}>
        {product.title}
      </h2>
    </div>
  </CardBoard>
);

ProductItem.propTypes = {
  product: object.isRequired,
};

export default ProductItem;
