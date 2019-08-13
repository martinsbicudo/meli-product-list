import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import classnames from 'classnames';
import style from './style.scss';

const EmptyState = ({
  className,
  image,
  title,
  description,
  children,
}) => (
  <div
    className={classnames(
      style.EmptyState,
      className,
    )}
  >
    <figure className={style.EmptyStateFigure}>{image}</figure>
    <h1 className={style.EmptyStateTitle}>{title}</h1>
    <p className={style.EmptyStateDescription}>{description}</p>
    {children}
  </div>
);

EmptyState.propTypes = {
  className: string,
  image: node.isRequired,
  title: oneOfType([string, node]).isRequired,
  description: oneOfType([string, node]),
  children: oneOfType([string, node]),
};

EmptyState.defaultProps = {
  className: '',
  description: '',
  children: null,
};

export default EmptyState;
